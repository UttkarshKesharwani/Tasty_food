import { useEffect, useState } from "react";
import { REST_MENU_API } from "./Constants";

const useResMenu = (resId) => {
  const [ResMenu, SetResMenu] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(REST_MENU_API + resId);
    const json = await data.json();
    SetResMenu(json);
  };

  return ResMenu;
};

export default useResMenu;
