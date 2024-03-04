import { Link } from "react-router-dom";
import { SWIGGY_LOGO_IMG } from "../Utils/Constants";
import React, { useContext } from "react";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const isOnline = useOnlineStatus();

  // ! this will wrap createContext into an object
  // const data = useContext(UserContext);
  // console.log(data);
  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser)

  const cartItmes = useSelector((store) => {
    return store.cart.items;
  });
  // console.log(cartItmes);

  return (
    <header>
      <nav className="mt-4 flex items-center justify-around h-10 bg-blue-300">
        <img className="w-36" src={SWIGGY_LOGO_IMG} alt="" />
        <div>
          <ul className="flex ">
            <div>
              <span>Online Status : {isOnline ? "🟢" : "❌"}</span>
            </div>
            <li className="mx-3 hover:text-orange-500">
              <Link to={"/Search"}>Search</Link>
            </li>
            <li className="mx-3 hover:text-orange-500">
              <Link to={"/Offers"}>Offers</Link>
            </li>
            <li className="mx-3 hover:text-orange-500">
              <Link to={"/Help"}>Help</Link>
            </li>
            {/* <li className="mx-3 hover:text-orange-500">Profile</li> */}

            <li className="mx-3 hover:text-orange-500">
              <Link to={"/Grocery"}>Grocery</Link>
            </li>
            <li className="mx-3 hover:text-orange-500">
              <Link to={"/Cart"}>Cart ({cartItmes.length} Items)</Link>
            </li>
            <li className="mx-3 font-semibold hover:text-orange-500">
              {loggedInUser}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
