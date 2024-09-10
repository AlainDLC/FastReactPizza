import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-stone-800 text-sm md:text-md text-gray-200 uppercase p-4 sm:px-6 px-4 flex items-center justify-between">
      <p className="bg-stone-800 space-x-4 sm:space-x-6  ">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
