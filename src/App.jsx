import { useReducer, useState } from "react";

const App = () => {
  const TodoReducer = (state, action) => {
    switch (action.type) {
      case "GET_INPUT_VALUE":
        return {
          ...state,
          inpValue: action.val,
        };
      case "ADD_TODO":
        return {
          inpValue: "",

          list: [...state.list, { title: state.inpValue, id: Date.now() }],
        };
      case "DELETE_TODO":
        return {
          ...state,
          list: state.list.filter((todo) => todo.id !== action.payloadId),
        };
      case "OPEN_EDIT_TODO":
        return {
          ...state,
          selectedId: action.payloadId,
          editedVal: action.editVal,
        };

      case "GET_EDITED_INPUT_VALUE":
        return { ...state, editedVal: action.val };
      case "SAVE_TODO":
        return {
          ...state,
          selectedId: "",
          list: state.list.map((todo) =>
            todo.id === action.payloadId
              ? { ...todo, title: action.editedVal }
              : todo
          ),
        };
    }
  };
  const [state, dispatch] = useReducer(TodoReducer, {
    inpValue: "",
    list: [],
    selectedId: "",
    editedVal: "",
  });

  return (
    <div className="w-full mx-auto max-w-[700px]">
      <div className="flex flex-col p-4  bg-slate-100 rounded-md mt-5">
        <div className=" w-full flex items-center p-4 gap-2 ">
          <input
            type="text"
            placeholder="enter todo title"
            value={state.inpValue}
            onChange={(e) =>
              dispatch({ type: "GET_INPUT_VALUE", val: e.target.value })
            }
            className="border rounded-md p-2 w-full"
          />
          <button
            disabled={state.inpValue === ""}
            onClick={() =>
              dispatch({
                type: "ADD_TODO",
              })
            }
            className="border px-[5px] rounded-md border-blue-500 hover:bg-blue-500 decoration-blue-500 font-bold "
          >
            Add
          </button>
        </div>

        {state.list.length > 0
          ? state.list.map((todo) => {
              return (
                <div key={todo.id} className="p-2">
                  <div className="flex items-center justify-between bg-slate-300 p-2 rounded-md">
                    <div className="flex flex-col my-3">
                      {state.selectedId === todo.id ? (
                        <input
                          type="text"
                          value={state.editedVal}
                          defaultValue={todo.title}
                          placeholder="enter todo title"
                          className="border rounded-md p-2 w-full"
                          onChange={(e) =>
                            dispatch({
                              type: "GET_EDITED_INPUT_VALUE",
                              val: e.target.value,
                            })
                          }
                        />
                      ) : (
                        <h1 className="text-[22px] font-bold">{todo.title}</h1>
                      )}
                    </div>
                    <div className="w-[130px]  flex  gap-1">
                      <input type="checkbox" name="" id="" />
                      <button
                        onClick={() =>
                          dispatch({ type: "DELETE_TODO", payloadId: todo.id })
                        }
                        className="border px-[5px] rounded-md border-red-500 hover:bg-red-500 decoration-red-500 font-bold "
                      >
                        Delete
                      </button>
                      {state.selectedId === todo.id ? (
                        <button
                          onClick={() => {
                            dispatch({
                              type: "SAVE_TODO",
                              payloadId: todo.id,
                              editedVal: state.editedVal,
                            });
                            state.editedVal.length < 1 &&
                              dispatch({
                                type: "SAVE_TODO",
                                payloadId: todo.id,
                                editedVal: todo.title,
                              });
                          }}
                          className="border px-[5px] rounded-md border-green-500 decoration-red-500 hover:bg-green-500 font-bold"
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          onClick={() =>
                            dispatch({
                              type: "OPEN_EDIT_TODO",
                              payloadId: todo.id,
                              editVal: todo.title,
                            })
                          }
                          className="border px-[5px] rounded-md border-green-500 decoration-red-500 hover:bg-green-500 font-bold"
                        >
                          Edit
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          : "No todo here"}
      </div>
    </div>
  );
};

export default App;
