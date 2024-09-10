import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 font-serif border-b border-blue-100 sm:px-6">
      <Link to="/" className="tracking-[0.2rem] text-2xl">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}
