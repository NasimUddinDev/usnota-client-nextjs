import  { useEffect, useState } from "react";
import { FiHeart, FiMinusCircle, FiPlusCircle, FiShare2 } from "react-icons/fi";
import { FaOpencart, FaStar, FaStarHalfAlt } from "react-icons/fa";

const ProductInfo = ({ product }) => {

   const thumbnail=""
   const images=[]
   const title="Hello world"
   const rating=4
   const price=400
   const brand="Apple"
   const category="category"
   const discountPercentage="10"
   const size=["42", "44"]

  const [image, setImage] = useState(thumbnail || images[0]);

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

        {/* rating  */}
        <div className="flex justify-between items-center">
          <div className="flex gap-px text-sm">{ratingStar}</div>
          <div className="flex gap-4 items-center">
            <button
              className={`shadow-lg p-3 rounded-full`}
            >
              <FiHeart />
            </button>
            <button className="shadow-lg p-3 rounded-full">
              <FiShare2 />
            </button>
          </div>
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
        {size && (
          <div className="flex gap-4 items-center">
            <p>Size:</p>

            <div className="flex gap-2 items-center">
              {size.length &&
                size.map((size) => (
                  <button
                  
                    className="py-2 px-3 rounded border scale-[.96] hover:scale-[1] hover:border-neutral duration-300"
                  >
                    {size.value}
                  </button>
                ))}
            </div>
          </div>
        )}

        {/* Buttons */}
        <button
              
              className="w-40 bg-primary text-base-100 px-2 py-1.5 rounded flex items-center gap-1 justify-center scale-[.97] hover:scale-[1] duration-300"
            >
              <FaOpencart />
              Add To Card
            </button>
      </div>
    </div>
  );
};

export default ProductInfo;
