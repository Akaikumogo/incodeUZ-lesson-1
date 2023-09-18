// eslint-disable-next-line react/prop-types
const Card = ({ item }) => {
  console.log(item);
  // eslint-disable-next-line react/prop-types
  const { title, description, price, image } = item;
  return (
    <div className=" w-[350px] h-[500px] border-2 border-black p-5 shadow-2xl  rounded-lg m-6">
      <img className="w-[200px] h-[200px]" src={image} alt="" />
      <p>{title}</p>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
};

export default Card;
