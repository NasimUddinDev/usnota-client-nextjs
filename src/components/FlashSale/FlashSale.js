import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import ProductCard from "./../ProductCard/ProductCard";
import getData from "@/utils/getData";

export default async function FlashSale() {
  const { data: products, error } = await getData(
    "https://usnota-server.vercel.app/api/v1/product/flash-products"
  );

  return (
    <div className="my-4">
      <div className="container bg-base-100 p-4 rounded-lg shadow-lg">
        <div className="flex justify-between sm:items-center border-b pb-2 border-primary">
          <h1 className="text-lg font-medium text-neutral">FlashSale</h1>

          <div>
            <Link
              href="/shops/flash-sale"
              className="w-max flex items-center text-primary font-medium hover-go"
            >
              <h1 className="text-sm">Shop More</h1>
              <MdKeyboardArrowRight className="text-lg pt-px duration-200" />
            </Link>
          </div>
        </div>

        {/* Product Card */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mt-2">
          {products?.length > 0 &&
            products?.map((product) => <ProductCard product={product} />)}
        </div>
      </div>
    </div>
  );
}
