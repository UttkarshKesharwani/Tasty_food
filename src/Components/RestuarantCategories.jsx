import { useState } from "react";
import ItemLists from "./ItemLists";

const RestuarantCategories = (props) => {
  const [showItems, setShowItems] = useState(false);
  // console.log(props);
  const { data } = props;
  const { title, itemCards } = data.card.card;
  // console.log(itemCards);

  const accordian = () => {
    setShowItems(!showItems);
  };
  return (
    <>
      <div className=" bg-green-300  my-4 shadow-lg px-3 cursor-pointer">
        <div
          className="my-5 flex justify-between items-center"
          onClick={accordian}
        >
          <span className="my-3 font-bold   text-lg">
            {title} ({itemCards.length})
          </span>
          <span className="my-3 text-xl font-bold">
            {showItems ? "–" : "+"}
          </span>
        </div>
        {showItems && <ItemLists data={itemCards} />}
      </div>
    </>
  );
};

export default RestuarantCategories;
