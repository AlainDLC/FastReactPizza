import { useSelector } from "react-redux";

export default function UserName() {
  const username = useSelector((state) => state.user.username);
  if (!username) return null;
  return <p className=" hidden text-xl font-serif md:block">{username}</p>;
}
