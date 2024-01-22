import React from 'react'
interface Props {
    setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
  }
  
  function Filter({ setSelectedCategory }: Props) {
    const categories = [
      "war",
        "historyEvents",
     
    ];
  
    
  
    return (
      <div className="w-[250px]">
        <div className="w-full px-2 shadow-md">
          <select className='w-full' onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
  
       
      
      </div>
    );
  }
  
  export default Filter;