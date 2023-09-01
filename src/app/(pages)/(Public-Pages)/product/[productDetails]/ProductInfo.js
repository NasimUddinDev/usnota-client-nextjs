import { useState, useEffect } from 'react';
import { FiHeart, FiMinusCircle, FiPlusCircle, FiShare2 } from 'react-icons/fi';
import { FaOpencart, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineCheck } from 'react-icons/ai';
import Image from 'next/image';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

import { UseContext } from '@/app/context/context';

const ProductInfo = ({ product }) => {
  const [image, setImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const { carts,
    handelAddToCart,
    handelIncreaseCart,
    handelDecreaseCart, } = UseContext();

  const handelIncrease = () => {
    setQuantity(quantity + 1)
  }

  const handelDecrease = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1)
    }
  }

  const handelSelectSize = size =>{
    if(selectedSize === size){
      setSelectedSize("")
    }else{
      setSelectedSize(size)
    }
  }

  const handelColorSelect = (clr) => {
    if(selectedColor === clr){
      setSelectedColor("")
    }else{
      setSelectedColor(clr)
    }
  }

  // Rating number to start convert
  const ratingStar = Array.from({ length: 5 }, (element, index) => {
    return (
      <span key={index}>
        {product?.rating >= index + 1 ? (
          <FaStar className="text-yellow-400" />
        ) : product?.rating >= index + 0.5 ? (
          <FaStarHalfAlt className="text-yellow-400" />
        ) : (
          <FaStar className="text-gray-300" />
        )}
      </span>
    );
  });

  return (
    <div className="lg:flex gap-6">
      {/* Image */}
      <div className="lg:w-[42%]">
        <div className="relative">
          <PhotoProvider>
            <PhotoView src={image !== "" ? image : product?.thumbnail}>
              <Image
                width="100"
                height="100"
                src={image !== "" ? image : product?.thumbnail}
                alt=""
                className="w-full h-[350px] rounded"
                title="click to zoom"
              />
            </PhotoView>
          </PhotoProvider>

          {/* Discount */}
          <div className="absolute top-1 text-base-100 right-0 bg-red-600 w-max rounded-l-full px-2 py-px">
            <p>{product?.discountPercentage}%</p>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-2 mt-4">
          {
            product?.images?.map(img => (
              <button onClick={() => setImage(img)}>
                <Image src={img} alt="" width="100" height="100" className="w-full h-16 rounded" />
              </button>
            ))
          }
        </div>
      </div>

      {/* Details */}
      <div className="lg:w-[58%] mt-4 lg:mt-0">
        {/* title  */}
        <div>
          <h1 className="text-3xl font-semibold text-neutral">{product?.title}</h1>
          <div className="text-sm">
            <p>
              <span className="text-neutral/80">Brand:</span>{' '}
              <span>{product?.brand}</span>
            </p>
            <p>
              <span className="text-neutral/80">Category:</span>{' '}
              <span>{product?.category} - {product?.subCategory} - {product?.subSubCategory}</span>
            </p>
          </div>
        </div>

        {/* rating & wishlist */}
        <div className="flex justify-between items-center">
          <div className="flex gap-px text-sm">{ratingStar}</div>

          <button className={`shadow-lg p-3 rounded-full`}>
            <FiHeart />
          </button>
        </div>

        {/* Price */}
        <div className="py-3 border-y mt-3">
          <div className="flex gap-6 items-center">
            <p className="text-neutral opacity-70">Price: </p>

            <div className="flex items-end gap-2">
              <p className="text-primary text-2xl font-medium">
                ৳ {parseInt(product?.price - (product?.price * product?.discountPercentage) / 100)}
              </p>

              {product?.discountPercentage > 0 && (
                <del className="text-neutral/70">৳{product?.price}</del>
              )}
            </div>
          </div>
        </div>

        {/* Size */}
        {product?.size?.length > 0 && (
          <div className="flex gap-4 items-center my-4">
            <p>Size :</p>

            <div className="flex gap-2 items-center">
              {
                product?.size?.map((size) => (
                  <button
                    key={size}
                    onClick={() => handelSelectSize(size)}
                    className={`${size === selectedSize && 'bg-primary text-base-100'
                      } text-[15px] py-1.5 px-2.5 rounded border scale-[.96] hover:scale-[1] hover:border-primary duration-300`}
                  >
                    {size}
                  </button>
                ))
              }
            </div>
          </div>
        )}

        {/* Color */}
        {product?.color?.length > 0 && (
          <div className="flex gap-4 items-center my-4">
            <p>Color :</p>

            <div className="flex gap-2 items-center">
              {
                product?.color?.map((clr) => (
                  <button
                    key={clr}
                    onClick={() => handelColorSelect(clr)}
                    className={`${clr === selectedColor && 'bg-primary text-base-100'
                      } text-sm py-1.5 px-2.5 rounded border scale-[.96] hover:scale-[1] hover:border-primary duration-300`}
                  >
                    {clr}
                  </button>
                ))
              }
            </div>
          </div>
        )}

        {/* Quantity */}
        <div className="py-3 flex gap-4 items-center border-y">
          <h2>Quantity: </h2>

          <div className="flex gap-2">
            <button
            onClick={handelDecrease}
            className="text-2xl hover:text-neutral duration-200"
          >
            <FiMinusCircle />
          </button>
          <div>
            <p className="w-14 font-semibold text-center">
              {quantity}
            </p>
          </div>
          <button
            onClick={handelIncrease}
            className="text-2xl hover:text-neutral duration-200"
          >
            <FiPlusCircle />
          </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 items-center mt-6">
          <button
              onClick={() => handelAddToCart({ product, selectedSize:selectedSize, selectedColor:selectedColor, quantity})}
              className="w-40 bg-primary text-base-100 px-2 py-1.5 rounded flex items-center gap-1 justify-center scale-[.97] hover:scale-[1] duration-300"
            >
              <FaOpencart />
              Add To Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
