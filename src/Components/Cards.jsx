import { IMG_LOGO_URL } from "../Utils/Constants";

const Cards = (props) => {
  // console.log(props);
  const { resData } = props;
  // console.log(resData);
  const { name, sla, cuisines, avgRating, id, cloudinaryImageId } =
    resData?.info;

  // console.log(name);
  // const { name } = resData?.info;

  return (
    <div className="w-[250px] h-[370px]">
      <div className="h-6/12 w-full">
        <img className="w-full" src={IMG_LOGO_URL + cloudinaryImageId} alt="" />
      </div>
      <h3>{name}</h3>
      <div>
        <span>{avgRating}</span>
        <span>{}</span>
      </div>
      <h2>{id}</h2>

      <h3>{cuisines.join(", ")}</h3>
    </div>
  );
};

export default Cards;
