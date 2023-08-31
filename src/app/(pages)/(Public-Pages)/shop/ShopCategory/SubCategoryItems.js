import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";


const SubCategoryItems = ({ subCategory }) => {
  const [subDropdownToggle, setSubDropdownToggle] = useState(false);

//   useEffect(() => {
//     if (subCategory.title === params.subCategory) {
//       setSubDropdownToggle(true);
//     } else {
//       setSubDropdownToggle(false);
//     }
//   }, [subCategory.title, params.subCategory]);

  if (subCategory?.subDropdown) {
    return (
      <li className="relative">
        <button
          onClick={() => setSubDropdownToggle(!subDropdownToggle)}
          className="flex justify-between items-center pl-2 py-1 w-full hover:bg-gray-200 duration-200 hover:text-primary"
        >
          <p>{subCategory.title}</p>
          <IoIosArrowDown
            className={`${subDropdownToggle && "rotate-180 "} duration-300`}
          />
        </button>

        <ul className={`pl-2 dropdown ${subDropdownToggle && "dropdownShow"}`}>
          {subCategory?.subDropdown?.map((subSubCategory,i) => (
            <li key={i}>
              <Link
                href={subSubCategory.link}
                className="flex items-center gap-2 hover:bg-gray-200 duration-200 hover:text-primary px-2 py-[4.5px]"
              >
                <p className="text-[15.5px]">{subSubCategory.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </li>
    );
  } else {
    return (
      <li>
        <Link
          href={subCategory.link}
          className="flex items-center gap-2 hover:bg-gray-200 duration-200 px-2 py-[4.5px]"
        >
          <p className="text-[15.5px]">{subCategory.title}</p>
        </Link>
      </li>
    );
  }
};

export default SubCategoryItems;
