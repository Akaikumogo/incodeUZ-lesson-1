import { useContext } from "react";
import { ProductsContext } from "../context/productsContext";

const Navbar = () => {
  const { data, isLoading } = useContext(ProductsContext);
  return (
    <header className="bg-slate-300">
      <nav className="container flex  it ems-center justify-between">
        <ul className="flex items-center gap-5">
          <li className="text-[19px]">Home</li>
          <li className="text-[19px]">About</li>
          <li className="text-[19px]">Settings</li>
        </ul>
        <p>All products:{isLoading ? "0" : data.length}</p>
      </nav>
    </header>
  );
};

export default Navbar;
