import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const HeroCategorySubItem = ({ subCategory }) => {
  if (subCategory?.subDropdown) {
    return (
      <li className="relative">
        <Link
          href={subCategory.link}
          className="flex items-center justify-between hover:bg-gray-200 duration-200 px-2 py-[4.5px] "
        >
          <p>{subCategory.title}</p>
          <span>
            <MdOutlineKeyboardArrowRight />
          </span>
        </Link>

        <div className="categorySubDropdown absolute left-full bg-base-100 border p-2 w-60 z-50 top-0">
          {subCategory?.subDropdown?.map((subSubCategory, i) => (
            <Link
              key={i}
              href={subSubCategory.link}
              className="flex items-center gap-2 hover:bg-gray-200 duration-200 px-2 py-[4.5px]"
            >
              <p>{subSubCategory.title}</p>
            </Link>
          ))}
        </div>
      </li>
    );
  } else {
    return (
      <li>
        <Link
          href={subCategory.link}
          className="flex items-center gap-2 hover:bg-gray-200 duration-200 px-2 py-[4.5px]"
        >
          <p>{subCategory.title}</p>
        </Link>
      </li>
    );
  }
};

export default HeroCategorySubItem;
