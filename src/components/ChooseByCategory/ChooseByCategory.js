import Link from "next/link";
import { categories } from "../../Data/categories";

const ChooseByCategory = () => {
  return (
    <div className="my-4">
      <div className="container">
        <div className="sm:flex gap-8 items-center border-b pb-2 border-primary">
          <h1 className="text-lg font-medium text-neutral mb-2 sm:mb-0">
            Choose By Category
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mt-4">
          {categories.map((category, i) => (
            <Link
              key={i}
              href={`${category.link}`}
              className="shadow border rounded p-4 flex  justify-center items-center text-center hover:bg-accent/20 duration-200"
            >
              <div>
                <img src={category.icon} alt="" className="w-20 h-20 mx-auto" />
                <h6 className="mt-2 font-medium">{category.title}</h6>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseByCategory;
