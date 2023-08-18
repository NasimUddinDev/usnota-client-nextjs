import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { Link } from 'next/link';

const cartItems = ({ product }) => {

  return (
    <tr key={id} className="border-b text-neutral/80">
      <td className="p-4 ">
        <div className="w-max flex gap-2 items-center">
          <img
            src={thumbnail}
            alt="Apple Watch"
            className="w-14 h-14 rounded-full"
          />
          <Link href={`/products/${title}`} className="leading-3">
            <h3 className="text-lg text-neutral">
              {title.length > 30 ? `${title.slice(0, 30)}...` : title}
            </h3>
            {/* {selectedSize && <small>Size:{selectedSize}"</small>} */}
          </Link>
        </div>
      </td>

      <td className="px-6 py-4 font-medium">
        <p className="w-max">
          {discountPercentage >= 1 ? (
            <>
              <span>৳{discountPrice}</span>
              <del className="text-xs text-neutral/80 pl-1">৳{price}</del>
            </>
          ) : (
            <span>৳{price}</span>
          )}
        </p>
      </td>

      <td className="px-6 py-4">
        <div className="w-max flex items-center gap-3">
          <button
            className="text-2xl hover:text-neutral duration-200"
          >
            <FiMinusCircle />
          </button>
          <div>
            <p className="w-14 border-2 border-neutral/80 text-neutral font-medium text-center rounded-lg py-px">
              {quantity}
            </p>
          </div>
          <button
            className="text-2xl hover:text-neutral duration-200"
          >
            <FiPlusCircle />
          </button>
        </div>
      </td>

      <td className="px-6 py-4 font-medium">
        <p className="w-max">
          ৳<span> {total}</span>
        </p>
      </td>

      <td className="px-6 py-4">
        <button
          className="font-medium text-sm text-red-600 hover:underline"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default cartItems;
