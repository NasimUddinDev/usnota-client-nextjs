import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HeroCategorySubItem from "../HeroCategorySubItem/HeroCategorySubItem";
import Link from "next/link";

const HeroCategoryItem = ({ category }) => {
  if (category.dropdown) {
    return (
      <li className="relative">
        <Link
          href={category.link}
          className="flex items-center justify-between hover:bg-gray-200 duration-200 px-2 py-[4.5px] "
        >
          <div className="flex items-center gap-2">
            <img src={category.icon} alt="" className="w-5 h-5" />
            <p>{category.title}</p>
          </div>

          <span>
            <MdOutlineKeyboardArrowRight />
          </span>
        </Link>

        <div className="categoryDropdown absolute left-full bg-base-100 border z-50 top-0">
          <ul className="w-60">
            {category.dropdown.map((subCategory, i) => (
              <HeroCategorySubItem key={i} subCategory={subCategory} />
            ))}
          </ul>
        </div>
      </li>
    );
  } else {
    return (
      <li>
        <Link
          href={category.link}
          className="flex items-center gap-2 hover:bg-gray-200 duration-200 px-2 py-[4.5px]"
        >
          <img src={category.icon} alt="" className="w-5 h-5" />
          <p>{category.title}</p>
        </Link>
      </li>
    );
  }
};

export default HeroCategoryItem;
