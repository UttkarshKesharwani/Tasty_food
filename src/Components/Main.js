import { useContext, useEffect, useState } from "react";
import Cards from "./Cards";
import { useEffect } from "react";
import { REST_API } from "../Utils/Constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Main = () => {
  const [ResList, setResList] = useState(null);
  const [FilterList, setFilterList] = useState(null);
  const [Search, setSearch] = useState(" ");

  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus);

  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(REST_API);
    const json = await data.json();
    console.log(json);
    setResList(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
    );
    setFilterList(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
    );
  };
  console.log(ResList);

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline .... Please check your Internet Connection
      </h1>
    );

  if (ResList === null) return <Shimmer />;
  return (
    <section className="mt-[10px]">
      <div className="max-w-5xl mx-auto ">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search Here"
            className="border border-black px-4 py-2 rounded-[10px] mr-4"
            value={Search}
            onChange={(e) => {
              // console.log(e.target.value);
              setSearch(e.target.value);
            }}
          />
          <button
            className="border border-black px-4 py-2 rounded-[10px]"
            onClick={() => {
              console.log(Search);
              const filterRestaurant = ResList.filter((list) => {
                return list.info.name
                  .toLowerCase()
                  .includes(Search.toLowerCase());
              });
              setFilterList(filterRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <div className="mb-4">
          <button
            className="border border-black px-4 py-2 rounded-[10px]"
            onClick={() => {
              const filter = FilterList.filter((list) => {
                return list.info.avgRating > 4;
              });
              setFilterList(filter);
            }}
          >
            Top rated Restuarants
          </button>
        </div>
        <div className=" grid grid-cols-4 gap-5">
          {FilterList.map((items) => {
            // console.log(items.info.id);
            return (
              <Link key={items.info.id} to={"/restaurant/" + items?.info?.id}>
                <Cards resData={items} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Main;
