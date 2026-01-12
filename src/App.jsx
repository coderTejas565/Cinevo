import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Home";
import MovieDetail from "./Components/MovieDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
    </Routes>
  );
}

export default App