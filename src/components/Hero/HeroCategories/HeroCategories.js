import React from "react";
import { categories } from "../../../Data/categories";
import HeroCategoryItem from "./HeroCategoryItem/HeroCategoryItem";

const HeroCategories = () => {
  return (
    <ul className="category text-[15.5px]">
      {categories.map((category, i) => (
        <HeroCategoryItem key={i} category={category} />
      ))}
    </ul>
  );
};

export default HeroCategories;
