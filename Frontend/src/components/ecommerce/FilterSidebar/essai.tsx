import { useEffect, useState } from 'react'

// interface Product {
//   category: string;
// }

// interface FetchResponse {
//   products: Product[];
// }
function FilterSidebar() {
  const [categories, setCategories] = useState<string[]>([]); // categories list is declared but never used its value
  const [brands, setBrands] = useState<string[]>([
    "chair",
    "table",
    "sofa",
    "bed",
    "wardrobe",
  ]); // 

  useEffect(() => {  // we render the categories from the API
    // fetch categories from API
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories')
        const data:string[] = await response.json()
        console.log(data);
        setCategories(data);

      } catch (error) {
        console.error('Error fetching categories', error)
      }
    }

    fetchCategories();
  }, [])

  return (
    <div className='sidenav_container bg-gray-100 p-6 w-64 rounded-lg shadow-md'>
      <h3 className='text-2xl font-bold mb-5'>Filters</h3>

      {/* Category Filter */}
      <div>
        <h4>Category</h4>
        {["Chair", "Table", "Sofa", "Bed"].map((category, index) => (
          <label key={index} className='block mb-2'>
            <input type="checkbox" name='category' value={category} className='mr-2 w-[16px] h-[16px]' />
            {category}
          </label>
        ))}
      </div>



      <section className='mb-6'>
        <input type="text" className='w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400' placeholder='Search Product' />
        <div className="flex gap-2">
          <input type="text" className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder='min' />
          <input type="text" className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder='max' />
        </div>
      </section>


      {/* Categories Section */}
      <section>
        <div className="mb-5">
          <h2 className="text-xl font-seemibold mb-3">Categories</h2>
        </div>

        {categories.map((category, index) => (
          <label key={index} className='block mb-2'>
            <input type="radio" name='category' value={category} className='mr-2 w-[16px] h-[16px]' />
            {category.toUpperCase()}
          </label>
        ))}
      </section>
    </div>
  )
}

export default FilterSidebar
