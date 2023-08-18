import { CgUnavailable } from "react-icons/cg";

export default function ShopProducts() {
  return (
    <div className="ShopProducts shadow-lg min-h-[70vh]">
        <div className="w-full h-full flex flex-col justify-center items-center">
            <CgUnavailable className="text-3xl opacity-70 text-primary" />
            <p className="font-medium">No Product Avalaible</p>
        </div>
    </div>
  )
}
