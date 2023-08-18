"use client";
import Link from "next/link";
import ShopCategory from '../ShopCategory/ShopCategory';
import ShopProducts from '../ShopProducts/ShopProducts';

export default function category({params}) {
  console.log(params)
  const category = params.category[0];
  const subCategory = params.category.length >= 2 && params.category[1];
  const subSubCategory = params.category.length >= 3 && params.category[2];


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
              <Link href="/shop" className="text-primary">
                Shop
              </Link>
            </li>
            {
              category && subCategory ?  
              <li>
                <Link href={`/shop/${category}`} className="text-primary">
                  {category}
                </Link>
              </li>
              : 
              <li>{category}</li>
            }
           
            {
              (subCategory && subSubCategory) ? 
              <li>
                <Link href={`/shop/${category}/${subCategory}`} className="text-primary">
                  {subCategory}
                </Link>
              </li>
              :
              subCategory && 
              <li>
                {subCategory}
              </li> 
            }

            {
              subSubCategory && 
              <li>
                {subSubCategory}
              </li>
            }
          </ul>
        </div>

        <div className="shopPages flex gap-5">
          <ShopCategory />
          <ShopProducts />
        </div>
      </div>
    </div>
  )
}
