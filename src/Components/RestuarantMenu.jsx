import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../Utils/useResMenu";
import RestuarantCategories from "./RestuarantCategories";

const RestuarantMenu = () => {
  // const [ResMenu, SetResMenu] = useState(null);

  const { resId } = useParams();
  const ResMenu = useResMenu(resId);

  console.log(ResMenu);
  // console.log(resId);

  // useEffect(() => {
  //   fetchData();
  // }, []);
  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.482735&lng=80.290048&restaurantId=" +
  //       resId
  //   );
  //   // const data = await fetch(REST_MENU_API + resId);
  //   const json = await data.json();
  //   SetResMenu(json);
  //   console.log(json);
  // };

  if (ResMenu === null) return <Shimmer />;

  const { itemCards } =
    ResMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  // console.log(itemCards);

  // console.log(
  //   ResMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // );

  const Categories =
    ResMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cat) => {
        return (
          cat?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );
  console.log(Categories);

  const { name, cuisines, costForTwoMessage } =
    ResMenu?.data?.cards[0]?.card?.card?.info;

  return (
    <section className="">
      <div className=" mx-auto max-w-3xl mt-3">
        <h2 className="font-bold">{name}</h2>
        <h2>
          {cuisines.join(",")} :- {costForTwoMessage}
        </h2>

        {Categories.map((cat) => (
          <RestuarantCategories key={cat.card.card.title} data={cat} />
        ))}
      </div>
    </section>
  );
};

export default RestuarantMenu;

{
  /* 
      <h2>Menu :-</h2>
      <ul>
        {itemCards.map((menu) => {
          return (
            <li key={menu.card.info.id}>
              {menu.card.info.name} - {menu.card.info.price / 100}
            </li>
          );
        })}
      </ul> */
}
