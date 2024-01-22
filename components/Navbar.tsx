import HistoricalEvents from "./HistoricalEvents"

const Navbar = () => {
  return (
    <header className='w-full px-6 py-8 shadow-sm shadow-gray-300 '>
<select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-t-sm focus:ring-blue-500 focus:border-blue-500 block px-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Choose an Event</option>
  <option value="all">All</option>
  <option value=""></option>
  <option value=""></option>
  <option value=""></option>
</select>
    </header>
  )
}

export default Navbar