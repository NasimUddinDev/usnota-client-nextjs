import ProductCard from "@/components/ProductCard/ProductCard";
import { CgUnavailable } from "react-icons/cg";

export default function ShopProducts({ products,loading }) {

  if(loading){
    return <p>Loading...</p>
  }

  return (
    <div className="ShopProducts shadow-lg min-h-[70vh] px-4">
      {products?.length <= 0 ? (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <CgUnavailable className="text-3xl opacity-70 text-primary" />
          <p className="font-medium">No Product Avalaible</p>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {products?.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
