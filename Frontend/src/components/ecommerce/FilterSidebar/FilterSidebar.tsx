import { useEffect, useState } from 'react'
import styles from './styles.module.css';

const { sidenav_container, filterSection, saveFiltersChangesButton, clearFiltersButton} = styles;

interface FilterState {
  category: string[];
  price: { min: number; max: number };
  color: string[];
  material: string[];
}

interface FilterSidebarProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}

function FilterSidebar({ filters, setFilters }: FilterSidebarProps) {

  // useEffect(() => {  // we render the categories from the API
  //   // fetch categories from API
  //   const fetchCategories = async () => {
  //     try {
  //       const response = await fetch('https://fakestoreapi.com/products/categories')
  //       const data: string[] = await response.json()
  //       // console.log(data);
  //       setCategories(data);

  //     } catch (error) {
  //       console.error('Error fetching categories', error)
  //     }
  //   }

  //   fetchCategories();
  // }, [])
  

  //Handle Category Filter Change
  const handleCategoryChange = (category: string) => {

    setFilters((prevFilters) => ({

      ...prevFilters, // we spread the previous filters and keep on the others filters
      // we check if the category is already selected, if not we add it to the array
      category: prevFilters.category.includes(category)  //if this condition is true then we remove the category by returning a new array that excludes the category.
        ? prevFilters.category.filter((c) => c !== category)
        : [...prevFilters.category, category]

    }));
    // console.log('categories filter',filters);
  }

  //Handle Category Filter Change
  const handlePriceChange = (price: {
      min: number,
      max: number,
    }) => {

      if (price.min <= price.max) {
        setFilters((prevFilters) => ({
          ...prevFilters,
          price,
        }));
      } else {
        console.error("Invalid price range: min must be less than or equal to max.");
      }
    // console.log('price filter',price);
  }

    //Handle Color Filter Change
    const handleColorChange = (color: string) => {

      setFilters((prevFilters) => ({
  
        ...prevFilters, // we spread the previous filters and keep on the others filters
        // we check if the category is already selected, if not we add it to the array
        color: prevFilters.color.includes(color)  //if this condition is true then we remove the category by returning a new array that excludes the category.
          ? prevFilters.color.filter((c) => c !== color)
          : [...prevFilters.color, color]
  
      }));
      // console.log('colors filter',filters);
    }

        //Handle Material Filter Change
        const handleMaterialChange = (material: string) => {

          setFilters((prevFilters) => ({
      
            ...prevFilters, // we spread the previous filters and keep on the others filters
            // we check if the category is already selected, if not we add it to the array
            material: prevFilters.material.includes(material)  //if this condition is true then we remove the category by returning a new array that excludes the category.
              ? prevFilters.material.filter((c) => c !== material)
              : [...prevFilters.material, material]
      
          }));
          // console.log('material filter',filters);
        }






  return (
    <div className={sidenav_container}>
      <h3 className='text-2xl font-bold mb-5'>Filters</h3>

      {/* Category Filter */}
      <div className={filterSection}>
        <h4>Category</h4>
        {["Chair", "Table", "Sofa", "Bed"].map((category, index) => (
          <label key={index} className='block mb-2'>
            <input 
            type="checkbox" 
            name='category' 
            value={category} 
            className='mr-2 w-[16px] h-[16px]'
            checked={filters.category.includes(category)} //check whether a specific category exists in the list of selected categories
            onChange={() => handleCategoryChange(category)} />
            {category}
          </label>
        ))}
      </div>

      {/* Price Range Filter */}
      <div className={filterSection}>
        <h4>Price Range (€)</h4>
        <input 
        type="range" 
        min="0" 
        max="1000"
        value={filters.price.min} 
        onChange={(e) => handlePriceChange({ min: Number(e.target.value), max: filters.price.max })}/>
      
        <input 
        type="range" 
        min="0" 
        max="1000" 
        value={filters.price.max} 
        onChange={(e) => handlePriceChange({ min: filters.price.min, max: Number(e.target.value) })}/>
        <p>€{filters.price.min} - €{filters.price.max}</p>
      </div>

      {/* Color Filter */}
      <div className={filterSection}>
        <h4>Color</h4>
        {["Red", "Blue", "Green", "Black"].map((color, index) => (
          <label key={index} className='block mb-2'>
            <input 
            type="checkbox" 
            name='color' 
            value={color} 
            className='mr-2 w-[16px] h-[16px]' 
            onChange={() => handleColorChange(color)}/>
            {color}
          </label>
        ))}
      </div>

      {/* Material Filter */}
      <div className={filterSection}>
        <h4>Material</h4>
        {["Wood", "Metal", "Plastic", "Glass"].map((material, index) => (
          <label key={index}>
            <input type="checkbox" 
            onChange={() => handleMaterialChange(material)}/>
            {material}
          </label>
        ))}
      </div>

      <button 
      className={saveFiltersChangesButton}
      onClick={() => console.log("Filters saved:", filters)}
      >
        Save All Filters
      </button>

      <button className={clearFiltersButton}
      onClick={() =>
        setFilters({
          category: [],
          price: { min: 0, max: 1000 },
          color: [],
          material: [],
        })
      }>
        Clear All Filters
      </button>


      {/* <section className='mb-6'>
        <input type="text" className='w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400' placeholder='Search Product' />
        <div className="flex gap-2">
          <input type="text" className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder='min' />
          <input type="text" className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder='max' />
        </div>
      </section> */}


      {/* Categories Section */}
      {/* <section>
        <div className="mb-5">
          <h2 className="text-xl font-seemibold mb-3">Categories</h2>
        </div>

        {categories.map((category, index) => (
          <label key={index} className='block mb-2'>
            <input type="radio" name='category' value={category} className='mr-2 w-[16px] h-[16px]' />
            {category.toUpperCase()}
          </label>
        ))}
      </section> */}
    </div>
  )
}

export default FilterSidebar
