import { useReducer, createContext } from "react";
import { Theme } from "./theme_reducer";
import { Loading } from "./loading_reducer";
import { Menu }  from "./menu_reducer";

let theme;
if (typeof window !== "undefined") {
      theme = localStorage.getItem("theme") || "Dark"
    }

// initial state
const initialState = {
    Theme: theme,
    Loading: false,
    Menu: false
    
};



// create context
const Context = createContext({});

// combine reducer function
const combineReducers = reducers => {
  return (state, action) => {
    return Object.keys(reducers).reduce(
      (acc, prop) => {
        return ({
          ...acc,
          ...reducers[prop]({ [prop]: acc[prop] }, action),
        })
      },
      state
    )
  }
}

// context provider
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(combineReducers({ Theme, Menu, Loading }), initialState); // pass more reducers combineReducers(user, blogs, products)
  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };