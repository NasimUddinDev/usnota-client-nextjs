"use client";
import ProductInfo from "./ProductInfo";
import RightSideInfo from "./RightSideInfo";

export default function ProductDetails() {
  return (
    <div className="container">
        <div className="lg:flex shadow-lg mt-4 rounded overflow-hidden">
          <div className="lg:w-[75%] bg-base-100 p-4 text-neutral">
            <ProductInfo />
          </div>

          <div className="lg:w-[25%] bg-stone-50 p-4 text-sm">
            <RightSideInfo />
          </div>
        </div>

        {/* Details */}
        <div className="bg-base-100 shadow-lg p-4 rounded mt-6">
          <h1 className="font-semibold text-lg">
            Product Description of 
          </h1>

          <div className="mt-3 pl-2">parcer Description...</div>
        </div>
    </div>
  )
}
