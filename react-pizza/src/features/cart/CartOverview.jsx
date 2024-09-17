import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartquantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";
function CartOverview() {
  const totalQuantity = useSelector(getTotalCartquantity);
  const totalPrice = useSelector(getTotalCartPrice);

  if (!totalQuantity) return null;
  return (
    <div className="bg-stone-800 text-sm md:text-md text-gray-200 uppercase p-4 sm:px-6 px-4 flex items-center justify-between">
      <p className="bg-stone-800 space-x-4 sm:space-x-6  ">
        <span>{totalQuantity} pizzas</span>
        <span>${formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
