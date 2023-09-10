import Link from 'next/link';
import { MdKeyboardArrowRight } from 'react-icons/md';
import ProductCard from './../ProductCard/ProductCard';
import getData from '@/utils/getData';

export default async function PopularProducts(){
  const {data:products, error} = await getData("product")
  if(products?.length <= 0 && !error){
    return "Loading..."
  }

  return (
    <div className="my-4">
      <div className="container bg-base-100 p-4 rounded-lg shadow-lg">
        <div className="flex justify-between sm:items-center border-b pb-2 border-primary">
          <h1 className="text-lg font-medium text-neutral">Popular Product</h1>

          <div>
            <Link
              href="/shops"
              className="w-max flex items-center text-primary font-medium hover-go"
            >
              <h1 className="text-sm">Shop More</h1>
              <MdKeyboardArrowRight className="text-lg pt-px duration-200" />
            </Link>
          </div>
        </div>

        {/* Product Card */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mt-2">
          {
            error && "Fetch Problem"
          }
          {
            products?.length > 0 && !error ? products?.map(product => <ProductCard product={product} />) : error
          }
        </div>
      </div>
    </div>
  );
};

