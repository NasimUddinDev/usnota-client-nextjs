import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const thumbnail = product?.thumbnail;
  const discountPercentage = product?.discountPercentage;
  const title = product?.title;
  const price = product?.price;
  const rating = product?.rating;

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
    <div className="mt-4 hover:shadow-lg rounded overflow-hidden product-card duration-300">
      <Link href={`/product/${product?.slug}`}>
        <div className="overflow-hidden relative">
          <Image
            src={thumbnail}
            alt=""
            width="100"
            height="100"
            className="w-full h-48 sm:h-56 duration-500"
          />
          {/* Discount */}
          {discountPercentage > 0 && (
            <div className="absolute top-1 text-base-100 right-0 bg-red-600 w-max rounded-l-full px-2 py-px">
              <p>{discountPercentage}%</p>
            </div>
          )}
        </div>
        <div className="p-2">
          <h1 className="text-lg font-medium mb-1">
            {title?.length > 40 ? `${title?.slice(0, 40)}...` : title}
          </h1>
          <div className="flex items-center gap-2">
            <p className="text-primary text-lg">
              ৳{parseInt(price - (price * discountPercentage) / 100)}
            </p>
            {discountPercentage > 0 && (
              <del className="text-neutral/70 text-sm ">৳{price}</del>
            )}
          </div>

          <div className="flex  text-sm text-yellow-500 mt-1">{ratingStar}</div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
