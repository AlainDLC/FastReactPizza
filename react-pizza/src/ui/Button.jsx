/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type, onClick }) {
  const base = `shadow-sm tracking-wide
         rounded-full uppercase 
         text-slate-700 bg-gradient-to-r
          from-indigo-500 via-purple-500
           to-pink-400 font-serif border-b
            border-blue-100 inline-block
             hover:text-pink-200 
             transition-colors
              duration-800 
              focus:outline-none 
              focus:ring focus:ring-pink-400 
              focus:ring-offset-2 `;
  const styles = {
    primary: base + "py-3 px-4 md:px-6 md:py-4",
    round: base + "px-2.5 py-2  md:px-3.5 md:py-2 text-sm",
    small: base + "py-2 px-2  md:px-5 md:py-2.5 text-[8px] ",
    secondary: `shadow-sm tracking-wide
         rounded-full uppercase border-2 
         text-slate-700 bg-transparent font-serif border-b
            border-green-100 inline-block
             hover:text-blue-200 
              hover:bg-yellow-200 
             transition-colors
              duration-800 
              focus:outline-none 
              focus:ring focus:ring-pink-400 
              focus:ring-offset-2 py-2.5 px-4 md:px-6 md:py-3.5`,
  };

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
