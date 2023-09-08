'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2'
  import { toast } from 'react-toastify';

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState(null);
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false);

  const [products, setProducts] = useState([]);

  const login = loginInfo => {
    setLoading(true);

    fetch('http://localhost:5000/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginInfo),
    })
      .then(res => res.json())
      .then(data => {
        if (data?.status === 'fail') {
          setLoginError(data.message);
        }
        if (data?.status === 'success') {
          localStorage.setItem('usnota_jwt', data?.token);

          fetch('http://localhost:5000/api/v1/user/me', {
            headers: {
              authorization: `bearer ${localStorage.getItem('usnota_jwt')}`,
            },
          })
            .then(res => res.json())
            .then(data => {
              if (data.status === 'success') {
                setLoggedUser(data);
              }
            });
        }
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Get Logged user
  useEffect(() => {
    fetch('http://localhost:5000/api/v1/user/me', {
      headers: {
        authorization: `bearer ${localStorage.getItem('usnota_jwt')}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') {
          setLoggedUser(data);
        }
      });
  }, []);


  // Get all products
  useEffect(() => {
    fetch('http://localhost:5000/api/v1/product')
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') {
          setProducts(data);
        }
      });
  }, []);


  //------- Handel cart
  const [localStorageCart, setLocalStorageCart] = useState([]);
  const [carts, setCarts] = useState(localStorageCart || []);

  // Get Local Cart
  useEffect(() => {
    setLocalStorageCart(JSON.parse(localStorage.getItem("usnota_cart")))
  }, []);
  
  // Set Local Cart
  useEffect(() => {
    localStorage.setItem("usnota_cart", JSON.stringify(carts));
  }, [carts]);

  // // Add Cart 
  const handelAddToCart = ({product, quantity, selectedSize, selectedColor}) => {
    if(product.size.length > 0  && !selectedSize){
     return Swal.fire(
        'Please Select Size',
        "",
        'warning',
      )
    }

    if(product.color.length > 0  && !selectedColor){
     return Swal.fire(
        'Please Select Color',
        "",
        'warning'
      )
    }

    const existed = carts?.find((item) => item.size === selectedSize && item.color === selectedColor);
    if(existed){
      return Swal.fire(
        'Already Added This Product',
        'If you want to increase Product quantity, please go cart page and increase quantity.',
        'warning',
      )
    }

    const cartProduct= {
      productId: product._id,
      title: product.title,
      slug: product.slug,
      thumbnail:product.thumbnail,
      discountPercentage:product.discountPercentage,
      price:product.price,
      quantity: quantity || 1,
      size: selectedSize, 
      color: selectedColor,
    }

    setCarts([...carts, {...cartProduct}]);

    toast.success("Add to Cart Success", {
      position: "top-center",
      autoClose: 1500,
    });
  };


  // Handel Increase Cart Quantity
  const handelIncreaseCart = (product) => {
    const existed = carts.find((item) => item._id === product._id);
    if (existed) {
      setCarts(
        carts.map((item) =>
          item._id === product._id
            ? { ...existed, quantity: existed.quantity + 1 }
            : item
        )
      );
    }
  };

    // Handel Decrease Cart Quantity
  const handelDecreaseCart = (product) => {
    const existed = carts.find((item) => item._id === product._id);
    if (existed.quantity > 1) {
      setCarts(
        carts.map((item) =>
          item._id === product._id
            ? { ...existed, quantity: existed.quantity - 1 }
            : item
        )
      );
    }
  };

  // Handel Delete Cart
  const handelDeleteCart = (product) => {
    const confirm = window.confirm("Are you sure delete this item");
    if (confirm) {
      const newCart = carts.filter(
        (cartProduct) => cartProduct._id !== product._id
      );
      setCarts(newCart);
    }
  };

  const contextInfo = {
    loggedUser,
    setLoggedUser,
    login,
    loginError,
    loading,
    products,
    carts,
    handelAddToCart,
    handelIncreaseCart,
    handelDecreaseCart,
    handelDeleteCart
  };
  return <Context.Provider value={contextInfo}>{children}</Context.Provider>;
};

export const UseContext = () => {
  const context = useContext(Context);
  return context;
};

export default ContextProvider;
