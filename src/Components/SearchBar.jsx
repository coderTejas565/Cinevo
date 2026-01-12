
const SearchBar = ({input,setInput,onSearch}) => {
  return (
   <>
   <div >
    <input type="text" name="Searchbar"
    value={input}
     className=' border border-red-700 rounded-md text-white m-2 p-2 focus:outline-red-800' onChange={(e) => setInput(e.target.value)}   />
    <button className=' border text-white px-4 py-1 border-yellow-300 rounded-xl cursor-pointer' onClick={onSearch} >Search</button>
   </div>
   </>
  )
}

export default SearchBar
