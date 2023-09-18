import { useContext } from "react";
import Card from "./Card";
import { ProductsContext } from "../context/productsContext";
const Products = () => {
  const { data, isLoading, keyword } = useContext(ProductsContext);
  return (
    <div className="container grid grid-cols-3 gap-3">
      {keyword === "1234" && !isLoading ? (
        data?.map((item) => <Card key={item.title} item={item} />)
      ) : (
        <h1 className="color-red-500 text-lg">
          {keyword === "1234" ? "Loadding" : null}
        </h1>
      )}
    </div>
  );
};

export default Products;
