'use client';
import { useEffect, useState } from 'react';
import { FiHeart, FiMinusCircle, FiPlusCircle, FiShare2 } from 'react-icons/fi';
import { FaOpencart, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineCheck } from 'react-icons/ai';
import Image from 'next/image';

const ProductInfo = () => {
  const thumbnail =
    'https://i.pinimg.com/236x/41/54/63/415463cf4b47442bf17fec29dbb7d6b5.jp';
  const images = [
    'https://i.pinimg.com/236x/41/54/63/415463cf4b47442bf17fec29dbb7d6b5.jp',
    'https://www.billbazar.com.bd/public/uploads/all/TlkkU2YUfQ6B7ctMGfg5aXX4T5Z3atpmGa8xb2no.webp',
  ];
  const title = 'Hello world';
  const rating = 4;
  const price = 400;
  const brand = 'No Brand';
  const category = 'category';
  const discountPercentage = '10';
  const sizes = ['38', '40', '42', '44'];
  const colors = ['red', 'green', 'yellow', 'blue', 'black'];

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
      <div className="lg:w-[40%]">
        <div className="relative">
          {/* <PhotoProvider>
            <PhotoView src={thumbnail}>
              <img src={thumbnail} alt="" className="h-96 w-full rounded" />
            </PhotoView>
          </PhotoProvider> */}
          <Image
            width="100"
            height="100"
            src="https://i.pinimg.com/236x/41/54/63/415463cf4b47442bf17fec29dbb7d6b5.jpg"
            alt=""
            className="w-full h-[350px] rounded"
          />

          {/* Discount */}
          <div className="absolute top-1 text-base-100 right-0 bg-red-600 w-max rounded-l-full px-2 py-px">
            <p>{discountPercentage}%</p>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-2 mt-4">
          <img src="" alt="" className="w-full h-16 rounded" />
          <img src="" alt="" className="w-full h-16 rounded" />
          <img src="" alt="" className="w-full h-16 rounded" />
          <img src="" alt="" className="w-full h-16 rounded" />
          <img src="" alt="" className="w-full h-16 rounded" />
        </div>
      </div>

      {/* Details */}
      <div className="lg:w-[60%] mt-4 lg:mt-0">
        {/* title  */}
        <div>
          <h1 className="text-3xl font-semibold text-neutral">{title}</h1>
          <div className="text-sm">
            <p>
              <span className="text-neutral/80">Brand:</span>{' '}
              <span>{brand}</span>
            </p>
            <p>
              <span className="text-neutral/80">Category:</span>{' '}
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
        <div className="py-3 border-y mt-3">
          <div className="flex gap-6 items-center">
            <p className="text-neutral opacity-70">Price: </p>

            <div className="flex items-end gap-2">
              <p className="text-primary text-2xl font-medium">
                ৳ {parseInt(price - (price * discountPercentage) / 100)}
              </p>

              {discountPercentage > 0 && (
                <del className="text-neutral/70">৳{price}</del>
              )}
            </div>
          </div>
        </div>

        {/* Quantity */}
        <div className="py-3 border-y">
          <div className="flex gap-6 items-center">
            <p className="text-neutral opacity-70">Quantity: </p>

            <div className="text-neutral opacity-70 px-2 py-1.5 flex gap-4">
              <button className="text-xl hover:text-neutral duration-200">
                <FiMinusCircle />
              </button>
              <div>
                <p className="font-semibold text-center">1</p>
              </div>
              <button className="text-xl hover:text-neutral duration-200">
                <FiPlusCircle />
              </button>
            </div>
          </div>
        </div>

        {/* Size */}
        {sizes && (
          <div className="flex gap-4 items-center mt-4">
            <p>Size :</p>

            <div className="flex gap-2 items-center">
              {sizes.length &&
                sizes.map((size, i) => (
                  <button
                    onClick={() => setSelectedSize({ size, index: i })}
                    className={`${
                      i === selectedSize.index && 'bg-primary text-base-100'
                    } text-[15px] py-1.5 px-2.5 rounded border scale-[.96] hover:scale-[1] hover:border-primary duration-300`}
                  >
                    {size}
                  </button>
                ))}
            </div>
          </div>
        )}

        {colors && (
          <div className="flex gap-4 items-center mt-4">
            <p>Color :</p>

            <div className="flex gap-2 items-center">
              {colors.length &&
                colors.map((color, i) => (
                  <button
                    onClick={() => setSelectedColor({ color, index: i })}
                    style={{ background: color }}
                    className={`opacity-70 text-[15px] w-6 h-6 rounded-full border scale-[.96] hover:scale-[1] text-base-100 flex justify-center items-center`}
                  >
                    {i === selectedColor.index && <AiOutlineCheck />}
                  </button>
                ))}
            </div>
          </div>
        )}

        {/* Buttons */}
        <button className="mt-6 w-40 bg-primary text-base-100 px-2 py-1.5 rounded flex items-center gap-1 justify-center scale-[.97] hover:scale-[1] duration-300">
          <FaOpencart />
          Add To Card
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
