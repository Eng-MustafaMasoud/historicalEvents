"use client"
import { useState } from "react";
import HistoricalEvents from "./HistoricalEvents"
import Filter from "./Filter";

const Navbar = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <header className='w-full px-6 py-8 shadow-sm shadow-gray-300 '>
<Filter setSelectedCategory={setSelectedCategory} />
    </header>
  )
}

export default Navbar