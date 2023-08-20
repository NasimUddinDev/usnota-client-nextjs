import { categories } from "@/Data/categories";
import CategoryItems from './CategoryItems';

export default function ShopCategory() {
  return (
    <div className="w-72 max-h-[70vh] overflow-auto shadow-lg p-3 ShopCategory">
      <div>
        <h2 className="font-medium border-b pb-1 border-gray-300">Categories</h2>
        <ul>
            {categories.map((category, i) => (
                <CategoryItems key={i} category={category} />
            ))}
        </ul>
      </div>
    </div>
  )
}
