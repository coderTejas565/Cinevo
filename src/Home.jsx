import React from 'react'
import { useState } from 'react'
import './App.css'
import SearchBar from './Components/SearchBar'
import useFetch from './hooks/useFetch'
import useDebounce from './hooks/useDebounce'
import MovieList from './Components/MovieList'
import Loader from './Components/Loader'
import ErrorMessage from './Components/ErrorMessage'


const Home = () => {
    const [input, setInput] = useState("");
const [searchText, setSearchText] = useState("");
const [page, setPage] = useState(1);
const debouncedSearchText = useDebounce(searchText, 500);
const { movies, loading, error } = useFetch(debouncedSearchText, page);
const handleSearch = () => {
  setPage(1);
  setSearchText(input);
};

  return (
    <div className='bg-black min-h-screen p-4'>
      <h1 className="text-4xl text-white text-center mb-4">
        Movie Browser
      </h1>
      
      <SearchBar 
        input={input}
        setInput={setInput} 
        onSearch={handleSearch}
      />
      
      {!loading && movies.length > 0 && (
        <h2 className="text-white text-2xl mt-4 mb-2">
          {searchText ? `Results for "${searchText}"` : "Popular Movies"}
        </h2>
      )}
      
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && <MovieList movies={movies} />}
      
      {!loading && movies.length > 0 && (
        <button 
          onClick={() => setPage(prev => prev + 1)}
          className="block mx-auto mt-4 text-white border border-yellow-300 px-6 py-2 rounded-xl hover:bg-yellow-300 hover:text-black transition"
        >
          Load More
        </button>
      )}
    </div>
  )
}

export default Home
