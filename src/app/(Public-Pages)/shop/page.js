import Link from "next/link";
import ShopCategory from "./ShopCategory/ShopCategory";
import ShopProducts from "./ShopProducts/ShopProducts";

const Shop = () => {
  return (
    <div className="pt-2">
      <div className="container">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link href="/" className="text-primary">
                Home
              </Link>
            </li>
            <li>
                Shop
            </li>
          </ul>
        </div>

        <div className="shopPages flex gap-5">
          <ShopCategory />
          <ShopProducts />
        </div>
      </div>
    </div>
  );
};

export default Shop;
