import { createContext } from "react";

// ! Lets you create a Context that components can provide or read.

const UserContext = createContext({
  loggedInUser: "Uttkarsh",
});

export default UserContext;
