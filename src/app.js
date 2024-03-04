import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Search from "./Components/Routes/Search";
import Offers from "./Components/Routes/Offers";
import Error from "./Components/Routes/Error";
import RestuarantMenu from "./Components/RestuarantMenu";
import UserContext from "./Utils/UserContext";
import appStore from "./Redux/appStore";
import { Provider } from "react-redux";
// import Grocery from "./Components/Grocery";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const Grocery = lazy(() => {
//   import("./Components/Grocery");
// });

const Grocery = lazy(() => {
  return import("./components/Grocery");
});

const AppLayout = () => {
  const [userName, setUserName] = useState();

  // fetching data and authenticating
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "aman",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider  store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userName }}>
      <div>
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
     </Provider>
  );
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/Search",
        element: <Search />,
      },
      {
        path: "/Offers",
        element: <Offers />,
      },

      {
        path: "/restaurant/:resId",
        element: <RestuarantMenu />,
      },
    ],
  },
  {
    path: "/Grocery",
    element: (
      <Suspense fallback={<h1>Loading....</h1>}>
        <Grocery />
      </Suspense>
    ),
  },
]);

// root.render(<AppLayout />);
root.render(<RouterProvider router={routes} />);
