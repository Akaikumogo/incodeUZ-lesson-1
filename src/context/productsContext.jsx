import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

// eslint-disable-next-line react/prop-types
const ProductsContextWrapper = ({ children }) => {
  const url = "https://fakestoreapi.com/products";
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [keyword, setKeyword] = useState("");
  const [color, setColor] = useState("grey-500");
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false);
      });
  }, []);
  return (
    <ProductsContext.Provider
      value={{ isLoading, data, keyword, setKeyword, color, setColor }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
export default ProductsContextWrapper;
