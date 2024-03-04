  Installation :-

npm init
npm i -D parcel
npm i react react-dom

# package.json :- It is the configration files for npm , maintain the version of all dependency used in the project

# package.lock.json :- it contains all the exact code of version of all dependency used in the package.json

# node_modules :- iske andar sare dependency ke code hai jo ki doosre dependency pe depend kr rhi hai do "npm install "

# JSX - is not Html in JS , but it is Html-like syntax . At the end of the JSX convert into the React.CreateElement and which is further converted(transpiler) by babel to under0 by the browsers i.e, it convert JSX to (react Element) React.CreateElement

# React component : it is of two types

class based component and functional component

React fucntional component is a nothing but function of javascript which return some piece of JSX code

# Props :- passing an porp to a component is just like passing a argument to a function , i.e when you have dynamically passing to some data in a componenet you pass as an props . It is javascript object

# React say never use key as index while using map

# React Hooks :- These are the normal js utility function written in react library in node module . The two which are commonly used is

i) useState() :- It is used to create a local state variable in the component . whenever a state variable changes or updates , react re-renders the component
ii) useEffect() :-It is takes two arguments: a callback function that contains the code for the side effect, and an optional dependency array that specifies when the effect should run . Side effects can include things like data fetching, subscriptions, manual DOM manipulations, or any other actions that need to be performed after the component has been rendered. The callback function of useeffect be called after your component renders

<!-- ! Here fun of useEffect will be called after every component render  -->

eg - useEffect(()=>{
console.log('called from useEffect');
})

<!-- ! but if we pass dependecy array in it then it will call only for initial i.e starting render and fun will called only for once  -->

eg - useEffect(()=>{
console.log('called from useEffect');
},[])

<!-- ! if dependency array is on [login] it means every time my login changes , the function of useEffect will called -->

eg - useEffect(()=>{
console.log("called form useffect from headinr");
},[loginBtn])

# Why react is so fast

-> it is so fast because it is doing efficient dom manipulataion because it has virtual dom and find the diff and update the UI

# How react works behind the scene

- React uses Reconciliation (Reconciliation means whenever there is something change in UI) Algorithm ,also known as React Fiber
- Diff Algorithm :- React find the difference b/w the previous virtual DOM and updated virtual DOM and update the UI

---

<!-- ! Note  :- Shortcut do "rafce" to create boiler plate for component -->

# for using rounting we are using javascript routing library , called react routing dom

=> do "npm i react-router-dom"
=> import { createBrowserRouter , RouterProvider } as name import in the root component file
=> root.render(<RouterProvider router = {appRouter}>)
=> createBrowserRouter defines, on which routes which page render  
 => RouterProvider provide the routing configration to be rendered on the page

# RouterProvider provide a eroor page by itself and if want to customize our erroor page then we can import hooks called useRouterError This is hooks given by react-router-dom , it can catches all the error thrown while routing and gives in an object form .

# import { Link } from "react-router-dom";

<!-- ! Never use "href" attribute to link the route bcoz jb ham log doosre route me jaege to poora page re-render/reload hoga aur link to use krne se ki component replace ho jaega . Link is a wrapper over anchor tag  -->

# There are two types of routing

- client-side routing :=> In this routing, the component getting changed , it doesn't make a network call to the servers
- server-side routing :=> In traditional time , we have differernt pages.html files for each routing and when we click on link for another page it take a network call to server and find that paritcular page and whole page render again on the webpage

# An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.

# useParam() (imported from react-router-dom) :- ye hook hai jo ki object deta hai , jo bhi route me jo bhi dynamic id hoti hai usko object ke form me return krta hai

🚀 Lecture :- 09 :-

# Single Responsibility principle :- it means every functional component must have a particular/single responsibility

# Custom hooks :-

# chinking/code spilliting/ dynamic routing/on demand loading /dynamic import / lazy loading :- in websites , we have so many component , and parcel do bundling of all the componenets of the files in single file , which will takes a lots of time to get render on the web pages , therefore we use chunking/lazy loading /code spilliting/dynamic routing to improve the performance of the web apps

🚀 Lecture :- 10 :-

# Tailwind css

🚀 Lecture :- 11 :-

# Higher order componenet :- It is function that takes a component as parameter and returns a componenets

i.e it takes the existing component as input and enhances/beautify that component and returns a enhanced componenets

# Lifting the state up

# Accordian component

# Props Drilling :- Prop drilling is basically a situation when the same data is being sent at almost every level due to requirements in the final level. Here is a diagram to demonstrate it better. Data needed to be sent from Parent to ChildC. In this article different ways to do that are discussed. " ! Solve prop drilling with UseContext Hooks "

=> In React, createContext() is a function that creates a new context object which can be used by any of the compnonet anywhere. Context provides a way to pass data through the component tree without having to pass props down manually at every level. It's often used when some data needs to be accessible to many components at different nesting levels in the component tree.
=> useContext() is a hooks provided by react ,used to access the createContext(), followed by the variable of the createContext inside the parenthesis of useContext();

🚀 Lecture : - 12 :-

# Redux toolkit :-

-> npm install @reduxjs/tookit and react-redux

# Redux store :-

-- Writing data to redux store slice
=> when we click a add button , it dispatches an action and which call the reducer() function, which updates/modify the slice of the redux store

-- Reading data to cart
=> We will use Selector(also known as subscribing the store ) and selector will change the functional component of the react
