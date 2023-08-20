"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import SubCategoryItems from "./SubCategoryItems";

const CategoryItems = ({ category }) => {
  const [dropdownToggle, setDropdownToggle] = useState(false);

//   useEffect(() => {
//     if (category.title === params.category) {
//       setDropdownToggle(true);
//     } else {
//       setDropdownToggle(false);
//     }
//   }, [category.title, params.category]);

  if (category?.dropdown) {
    return (
      <li>
        <button
          onClick={() => setDropdownToggle(!dropdownToggle)}
          className="flex justify-between items-center p-1 w-full hover:bg-gray-200 duration-200 hover:text-primary"
        >
          <p>{category.title}</p>
          <IoIosArrowDown
            className={`${dropdownToggle && "rotate-180 "} duration-300`}
          />
        </button>

        <ul
          className={`w-full pl-2 text-neutral/80 dropdown ${
            dropdownToggle && "dropdownShow"
          }`}
        >
          {category?.dropdown.map((subCategory, i) => (
            <SubCategoryItems
              key={i}
              subCategory={subCategory}
            />
          ))}
        </ul>
      </li>
    );
  } else {
    return (
      <li className="p-1 hover:bg-gray-200 duration-200 hover:text-primary">
        <Link href={category.link} className="block">
          {category.title}
        </Link>
      </li>
    );
  }
};

export default CategoryItems;
