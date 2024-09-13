/* eslint-disable react/prop-types */
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }) {
  const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-40 grayscale-0" : ""}`}
      />
      <div className="flex grow flex-col pt-o.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize  text-stone-500 mt-1">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-[10px] ">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-[10px] font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          <Button type="small">Add to cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
