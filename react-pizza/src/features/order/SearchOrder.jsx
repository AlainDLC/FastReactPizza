import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="rounded-full px-4 py-2 text-sm bg-purple-100 
        placeholder:text-stone-800 w-28   focus:outline-none 
                  focus:ring focus:ring-pink-400 
                  focus:ring-offset-2 sm:w-64 duration-200  "
        placeholder="Search order..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
