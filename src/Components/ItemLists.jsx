import { list } from "postcss";

import { IMG_LOGO_URL } from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/cartSlice";

const ItemLists = (props) => {
  // console.log(props);
  const { data } = props;
  console.log(data);

  // ! this dispatch is a function
  const dispatch = useDispatch();

  const handleAddButton = (items) => {
    dispatch(addItem(items));
  };
  return (
    <div>
      {data.map((items) => (
        <div key={items.card.info.id} className="border-b border-black ">
          <div className="mb-10 mt-4 flex justify-between items-center">
            <div>
              <div className="font-semibold">{items.card.info.name}</div>
              <div className="mt-1 text-sm font-medium">
                &#8377;
                {items.card.info.price / 100 ||
                  items.card.info.defaultPrice / 100}
              </div>
              <div className="text-sm mt-4">{items.card.info.description}</div>
            </div>
            <img
              className="w-[130px] h-0/12 relative rounded-lg"
              // src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/4b901b81733cb4162d1f94c5fb9f7c70"
              src={IMG_LOGO_URL + items.card.info.imageId}
              alt=""
            />
            <button
              className="text-green-400 bg-white px-8 pt-2 pb-3 rounded-lg font-medium text-s absolute"
              onClick={()=>handleAddButton(items)}
            >
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemLists;
