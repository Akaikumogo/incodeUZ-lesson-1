import { useContext, useRef } from "react";
import { ProductsContext } from "../context/productsContext";

const Inputs = () => {
  const { keyword, setKeyword, color, setColor } = useContext(ProductsContext);
  const inp1 = useRef();
  const inp2 = useRef();
  const inp3 = useRef();
  const inp4 = useRef();

  return (
    <div className="flex w-full gap-3 container p-5">
      <input
        ref={inp1}
        onChange={(e) =>
          e.target.value.length > 0
            ? (inp2.current.focus(), setKeyword(e.target.value))
            : null
        }
        maxLength={1}
        pattern="[0-9]"
        className={`w-[35px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:${color} focus:border-blue-500 block p-2.5`}
        type="text"
      />
      <input
        ref={inp2}
        maxLength={1}
        onChange={(e) =>
          e.target.value.length > 0
            ? (inp3.current.focus(), setKeyword(keyword + e.target.value))
            : inp1.current.focus()
        }
        pattern="[0-9]"
        className={`w-[35px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:${color} focus:border-blue-500 block p-2.5`}
        type="text"
      />
      <input
        ref={inp3}
        maxLength={1}
        onChange={(e) =>
          e.target.value.length > 0
            ? (inp4.current.focus(), setKeyword(keyword + e.target.value))
            : inp2.current.focus()
        }
        pattern="[0-9]"
        className={`w-[35px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:${color} focus:border-blue-500 block p-2.5`}
        type="text"
      />
      <input
        ref={inp4}
        maxLength={1}
        pattern="[0-9]"
        onChange={(e) =>
          e.target.value.length > 0
            ? (inp4.current.focus(),
              setKeyword(keyword + e.target.value),
              setColor("green-200"),
              console.log(color))
            : (inp3.current.focus(), setKeyword(keyword.slice(0, 3)))
        }
        className={`w-[35px] bg-gray-50 border border-${color} text-gray-900 text-sm rounded-lg  focus:border-blue-500 block p-2.5`}
        type="text"
      />
    </div>
  );
};

export default Inputs;
