"use client";
import { cities, districts } from "@/Data/location";
import { UseContext } from '@/app/context/context';
import  { useEffect, useState } from "react";
import { toast } from "react-toastify";
// import Swal from "sweetalert2";
// import ButtonSpinner from "../../../components/ButtonSpinner/ButtonSpinner";

const Checkout = () => {
  const { carts } = UseContext();
  const [loading, setLoading] = useState(false);
  const [couponBox, setCouponBox] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const [cityDropdown, setCityDropdown] = useState(false);
  const [city, setCity] = useState("");
  const [searchCity, setSearchCity] = useState("");

  const [districtDropdown, setDistrictDropdown] = useState(false);
  const [district, setDistrict] = useState("");
  const [searchDistrict, setSearchDistrict] = useState("");


  const handelSetCity = (selectedCity) => {
    setCity(selectedCity);
    setCityDropdown(false);
    setSearchCity("");
  };

  const handelSetDistrict = (selectedDistrict) => {
    setDistrict(selectedDistrict);
    setDistrictDropdown(false);
    setSearchDistrict("");
  };

  // Subtotal - discount amount
  const subTotal = carts?.reduce(
    (price, item) =>
      price +
      item.quantity *
        parseInt(item.price - (item.price * item.discountPercentage) / 100),
    0
  );

  let shipping = 0;

  if(city !== "" && city === "Dhaka"){
    shipping = 80
  }else if(city !== "" && city !== "Dhaka"){
    shipping = 150
  }else{
    shipping = 0
  }

  const tax = 0;
  const grandTotal = subTotal + tax + parseInt(shipping) - discount;



  const handelCoupon = () => {
    if (coupon.toLowerCase() === "nr100") {
      setDiscount(100);
      setCouponBox(false);
      toast.success("Coupon add success", {
        autoClose: 1000,
        position: "top-center",
      });
    } else {
      toast.error("Wrong Coupon Code", {
        autoClose: 1000,
        position: "top-center",
      });
    }
  };

  const handelPlaceOrder = (e) => {
    e.preventDefault();

    setLoading(true);

    const form = e.target;
    const name = loggedUser?.name || form.name.value;
    const number = loggedUser?.number || form.number.value;
    const email = loggedUser?.email || form.email.value;
    const street = form.street.value;
    const note = form.note.value;

    const customerInfo = {
      name,
      number,
      email,
      city,
      district,
      street,
      note,
    };
    const orderInfo = { productInfo: {}, customerInfo };

    console.log(orderInfo);

    // fetch("https://usnotafashion-server.vercel.app/order", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(orderInfo),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.acknowledged) {
    //       setCart([]);
    //       Swal.fire("success", "Product post Success", "success");
    //       setLoading(false);
    //       navigate("/shops");
    //     } else {
    //       toast.error("Something Wrong");
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  // Remove City Dropdown click other side
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!e.target.closest(".city")) {
        setCityDropdown(false);
      }
    });
  }, []);

  // Remove District Dropdown click other side
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!e.target.closest(".district")) {
        setDistrictDropdown(false);
      }
    });
  }, []);


  return (
    <div className="py-8">
      <div className="container">
        <form
          onSubmit={handelPlaceOrder}
          className="grid lg:grid-cols-3 gap-10 mt-6"
        >
          {/* Shipping Details */}
          <div className="lg:col-span-2">
            <div>
              <h2 className="text-lg font-semibold mb-4 uppercase">
                Shipping Details
              </h2>

              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h2>Full name</h2>
                  <input
                    type="text"
                    name="name"
                    className="border-2 w-full p-2 mt-2 outline-none rounded"
                    required
                    // defaultValue={user?.username}
                  />
                </div>
                <div>
                  <h2>Phone</h2>
                  <input
                    type="number"
                    name="number"
                    className="border-2 w-full p-2 mt-2 outline-none rounded"
                    required
                  />
                </div>
              </div>

              <div className="text-sm mt-2">
                <div>
                  <h2>Email address</h2>
                  <input
                    type="email"
                    name="email"
                    className="border-2 w-full p-2 mt-2 outline-none rounded"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative district">
                  <div className="text-sm mt-2">
                    <h2>District</h2>
                    <div
                      onClick={() => setDistrictDropdown(!districtDropdown)}
                      className="p-2 h-9 border rounded mt-2 cursor-pointer"
                    >
                      {district}
                    </div>
                  </div>

                  {districtDropdown && (
                    <div className="absolute bg-base-100 border rounded top-full left-0 p-2 w-full max-h-60 overflow-y-auto">
                      <div>
                        <input
                          onChange={(e) => setSearchDistrict(e.target.value)}
                          type="text"
                          className="px-2 py-1 rounded w-full border outline-none placeholder:font-light"
                          placeholder="search District"
                        />
                      </div>
                      <ul>
                        {districts
                          .filter((district) =>
                            district
                              .toLowerCase()
                              .includes(searchDistrict.toLowerCase())
                          )
                          .map((district) => (
                            <li
                              onClick={() => handelSetDistrict(district)}
                              className="p-1 hover:bg-gray-200 duration-200 cursor-pointer"
                            >
                              {district}
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="relative city">
                  <div className="text-sm mt-2">
                    <h2>City</h2>

                    <div
                      onClick={() => setCityDropdown(!cityDropdown)}
                      className="p-2 h-9 border rounded mt-2 cursor-pointer"
                    >
                      {city}
                    </div>
                  </div>

                  {cityDropdown && (
                    <div className="absolute bg-base-100 border rounded top-full left-0 p-2 w-full max-h-60 overflow-y-auto">
                      <div>
                        <input
                          onChange={(e) => setSearchCity(e.target.value)}
                          type="text"
                          className="px-2 py-1 rounded w-full border outline-none placeholder:font-light"
                          placeholder="search city"
                        />
                      </div>
                      <ul>
                        {cities
                          .filter((city) =>
                            city
                              .toLowerCase()
                              .includes(searchCity.toLowerCase())
                          )
                          .map((city, i) => (
                            <li
                              key={i}
                              onClick={() => handelSetCity(city)}
                              className="p-1 hover:bg-gray-200 duration-200 cursor-pointer"
                            >
                              {city}
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className="text-sm mt-2">
                <h2>Street address</h2>
                <input
                  type="text"
                  name="street"
                  placeholder="House number and street name"
                  className="border-2 w-full p-2 mt-2 outline-none rounded"
                  required
                />
              </div>

              <div className="text-sm mt-2">
                <div>
                  <h2>Order Notes (optional)</h2>
                  <textarea
                    name="note"
                    rows="5"
                    placeholder="Notes about your order, e.g. special notes for delivery"
                    className="border-2 w-full p-2 mt-2 outline-none rounded"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* Order details */}
          <div>
            <div className="checkout-output bg-gray-100 relative p-6">
              <h2 className="text-xl font-semibold text-center mb-4">
                YOUR ORDER
              </h2>

              <div>
                <div className="flex justify-between border-b-2 pb-3 text-title font-semibold">
                  <h2>PRODUCT</h2>
                  <p>PRICE</p>
                </div>

                {/* Product lists */}
                <ul>
                  {
                    carts?.map((product,i)=>(
                    <li
                    key={i}
                      className="flex justify-between border-b py-1.5 text-sm text-paragraph"
                    >
                      <h2>
                        {product?.title} - 
                        {product?.size && product?.size} {product?.color && product?.color} × {product?.quantity}
                      </h2>
                      <p>
                          {parseInt(
                            product?.discountPercentage >= 1
                              ? parseInt(
                                  product?.price -
                                    (product?.price *
                                      product?.discountPercentage) /
                                      100
                                )
                              : product?.price
                          ) * parseInt(product?.quantity)}
                      </p>
                    </li>
                    ))
                  }
                </ul>

                <div className="flex justify-between border-b py-1.5 font-semibold text-[15px]">
                  <h2>Subtotal</h2>
                  <p>
                    ৳<span>{subTotal}.00</span>
                  </p>
                </div>

                <div className="flex justify-between items-center border-b py-1.5">
                  <h2 className="text-[15px]">
                    Shipping{" "}
                    <small>
                      {
                        city !== "" && (city === "Dhaka" ? "(inside Dhaka)" : "(outside Dhaka)")
                      }
                    </small>
                  </h2>
                  <div className="text-end">
                    ৳<span>{shipping}.00</span>
                  </div>
                </div>

                <div className="flex justify-between items-center border-b py-1.5">
                  <h2 className="text-[15px]">Tax</h2>
                  <div className="text-end">
                    ৳<span>{tax}.00</span>
                  </div>
                </div>

                <div className="flex justify-between items-center border-b py-1.5">
                  <h2 className="text-[15px]">Discount</h2>
                  <div className="text-end">
                    -৳<span>{discount}.00</span>
                  </div>
                </div>

                {/* <!-- Total --> */}
                <div className="flex justify-between border-b py-3 font-semibold text-lg">
                  <h2 className="text-title">Total</h2>
                  <p className="text-primary">
                    ৳ <span>{grandTotal}.00 </span>
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-base-100 py-2 rounded shadow"
              >
                {/* {loading ? <ButtonSpinner /> : "PLACE ORDER"} */}
                PLACE ORDER
              </button>
            </div>

            {/* Coupon */}
            <div>
              <div className="flex justify-between items-center gap-1 font-medium relative py-1.5 border-b">
                <p>Have a coupon?</p>
                <div
                  className="cursor-pointer"
                  onClick={() => setCouponBox(!couponBox)}
                >
                  <p className="text-secondary underline text-sm">
                    Click here to enter your code
                  </p>
                </div>
              </div>
              {couponBox && (
                <div className="coupon-form">
                  <div className="p-4 border border-dashed text-center flex flex-col justify-center mt-4">
                    <p className="text-sm">
                      If you have a coupon code, please apply it below.
                    </p>
                    <div className="md:flex gap-2 items-center justify-center mt-2 text-sm">
                      <input
                        onChange={(e) => setCoupon(e.target.value)}
                        type="text"
                        placeholder="Enter Coupon Code"
                        className="border p-2 mt-2 outline-none rounded"
                      />
                      <div
                        onClick={handelCoupon}
                        className="px-6 py-2 mt-2 bg-primary text-base-100 rounded font-medium cursor-pointer"
                      >
                        APPLY
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </form>

        <div className="flex justify-end"></div>
      </div>
    </div>
  );
};

export default Checkout;
