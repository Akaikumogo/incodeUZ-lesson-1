// eslint-disable-next-line react/prop-types
export default function Card({ setIsActive }) {
  const list = JSON.parse(localStorage.getItem("List"));
  const rang = {
    zarur: "bg-red-200",
    kerak: "bg-green-200",
  };

  const done = (id) => {
    const updatedList = list.map((item) => {
      if (item.id === id) {
        setIsActive(!item.isActive);
        return { ...item, isActive: !item.isActive };
      }
      return item;
    });

    localStorage.setItem("List", JSON.stringify(updatedList));
  };

  return (
    <>
      {list.map((item) => (
        <div
          className={
            "m-5 w-100 p-[5px] rounded-md flex justify-between" +
            " " +
            rang[item.selectVal]
          }
          key={item.id}
        >
          <h1>{item.inputVal}</h1>

          <button onClick={() => done(item.id)}>
            {!item.isActive ? "✅" : " olinmadi"}
          </button>
        </div>
      ))}
    </>
  );
}
