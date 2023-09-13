import { useState } from "react";
import Card from "./components/Card";

export default function App() {
  localStorage.getItem("List")
    ? null
    : localStorage.setItem("List", JSON.stringify([]));
  const initialShoppingList = JSON.parse(localStorage.getItem("List")) || [];
  const [inputVal, setInputVal] = useState("");
  const [selectVal, setSelectVal] = useState("zarur");
  const [isActive, setIsActive] = useState(true);
  const [lastId, setLastId] = useState(0);
  const [shoppingList, setShoppingList] = useState(initialShoppingList);

  const add = () => {
    const newItem = { id: lastId + 1, inputVal, selectVal, isActive };
    const updatedList = [...shoppingList, newItem];
    setShoppingList(updatedList);
    localStorage.setItem("List", JSON.stringify(updatedList));
    localStorage.setItem("lastId", lastId + 1);
    setLastId(JSON.parse(localStorage.getItem("lastId")));
  };
  return (
    <div className="flex items-center w-full h-screen justify-center">
      <div className="shadow-xl w-[500px] h-[500px] rounded-lg p-[20px]  overflow-x-auto bg-blue-100">
        <h1 className=" text-center text-[20px] font-semibold">
          Shopping List App
        </h1>
        <div className="w-full px-20 flex gap-3 justify-center">
          <input
            onChange={(e) => setInputVal(e.target.value)}
            className="rounded-lg px-3 py-2"
            type="text"
            value={inputVal}
            placeholder="Item titel"
          />
          <select
            onChange={(e) => setSelectVal(e.target.value)}
            name=""
            className="rounded-lg px-4 py2"
            id=""
          >
            <option value="zarur">Zarur</option>
            <option value="kerak">Kerak</option>
          </select>
          <button
            disabled={!inputVal}
            onClick={() => add()}
            className={
              "rounded-xl px-3 py-2 text-white" +
              (inputVal ? " bg-green-700" : " bg-gray-400")
            }
          >
            Add
          </button>
        </div>
        <div>
          <Card setIsActive={setIsActive} />
        </div>
      </div>
    </div>
  );
}
