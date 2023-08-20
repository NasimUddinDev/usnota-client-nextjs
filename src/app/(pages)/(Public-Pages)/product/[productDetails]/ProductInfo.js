"use client";
import { useEffect, useState } from "react";
import { FiHeart, FiMinusCircle, FiPlusCircle, FiShare2 } from "react-icons/fi";
import { FaOpencart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";

const ProductInfo = () => {
  const thumbnail = "";
  const images = [];
  const title = "Hello world";
  const rating = 4;
  const price = 400;
  const brand = "No Brand";
  const category = "category";
  const discountPercentage = "10";
  const sizes = ["38", "40", "42", "44"];
  const colors = ["red", "green", "yellow", "blue", "black"];

  const [image, setImage] = useState(thumbnail || images[0]);
  const [selectedSize, setSelectedSize] = useState({});
  const [selectedColor, setSelectedColor] = useState({});

  // Rating number to start convert
  const ratingStar = Array.from({ length: 5 }, (element, index) => {
    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <FaStar className="text-yellow-400" />
        ) : rating >= index + 0.5 ? (
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
      <div className="lg:w-[45%]">
        <div className="relative">
          {/* <PhotoProvider>
            <PhotoView src={thumbnail}>
              <img src={thumbnail} alt="" className="h-96 w-full rounded" />
            </PhotoView>
          </PhotoProvider> */}
          <img src={image} alt="" className="h-96 w-full rounded" />

          {/* Discount */}
          <div className="absolute top-1 text-base-100 right-0 bg-red-600 w-max rounded-l-full px-2 py-px">
            <p>{discountPercentage}%</p>
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          {images?.length > 0 &&
            images?.map(
              (img) =>
                img !== null && (
                  <button onClick={() => setImage(img)}>
                    <img src={img} alt="" className="w-20 h-14 rounded" />
                  </button>
                )
            )}
        </div>
      </div>

      {/* Details */}
      <div className="lg:w-[55%] mt-4 lg:mt-0">
        {/* title  */}
        <div>
          <h1 className="text-3xl font-semibold text-neutral">{title}</h1>
          <div className="text-sm">
            <p>
              <span className="text-neutral/80">Brand:</span>{" "}
              <span>{brand}</span>
            </p>
            <p>
              <span className="text-neutral/80">Category:</span>{" "}
              <span>{category}</span>
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
        <div className="py-3 border-y my-4">
          <div className="flex items-end gap-2">
            <p className="text-primary text-2xl font-medium">
              ৳ {parseInt(price - (price * discountPercentage) / 100)}
            </p>

            {discountPercentage > 0 && (
              <del className="text-neutral/70">৳{price}</del>
            )}
          </div>
        </div>

        {/* Size */}
        {sizes && (
          <div className="flex gap-4 items-center mb-3">
            <p>Size :</p>

            <div className="flex gap-2 items-center">
              {sizes.length &&
                sizes.map((size,i) => (
                  <button
                    onClick={()=>setSelectedSize({size, index:i})}
                    className={`${i === selectedSize.index && "bg-primary text-base-100"} text-[15px] py-1.5 px-2.5 rounded border scale-[.96] hover:scale-[1] hover:border-primary duration-300`}
                  >
                    {size}
                  </button>
                ))}
            </div>
          </div>
        )}

        {colors && (
          <div className="flex gap-4 items-center mb-3">
            <p>Color :</p>

            <div className="flex gap-2 items-center">
              {colors.length &&
                colors.map((color,i) => (
                  <button
                    onClick={()=>setSelectedColor({color, index:i})}
                    style={{background: color}}
                    className={`opacity-80 text-[15px] w-6 h-6 rounded-full border scale-[.96] hover:scale-[1] text-base-100 flex justify-center items-center`}
                  >
                    {
                      i === selectedColor.index && <AiOutlineCheck/>
                    }
                  </button>
                ))}
            </div>
          </div>
        )}

        {/* Buttons */}
        <button className="w-40 bg-primary text-base-100 px-2 py-1.5 rounded flex items-center gap-1 justify-center scale-[.97] hover:scale-[1] duration-300">
          <FaOpencart />
          Add To Card
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
