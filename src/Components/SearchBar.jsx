
const SearchBar = ({input,setInput,onSearch}) => {
  return (
   <>
  <div className="flex items-center justify-center gap-5">
  <input
    type="text"
    placeholder="Search movies..."
    value={input}
    onChange={(e) => setInput(e.target.value)}
    onKeyDown={(e) => e.key === "Enter" && onSearch()}
    className="bg-black text-white border border-orange-400 rounded-sm 
               p-3 px-10 mt-10
               focus:outline-none focus:ring-2 focus:ring-orange-500"
  />

  <button
    onClick={onSearch}
    className="bg-orange-400 text-white text-xl font-semibold mt-10 px-6 py-3 rounded-md
               transition-all duration-300 ease-out
               hover:bg-orange-500 hover:scale-105
               active:scale-95"
  >
    Search
  </button>
</div>


   </> 
  )
}

export default SearchBar
