import { useReducer } from "react";

import React from "react";
import Reducer from "./reducer";

export const AuthContext = React.createContext();

const initState = {
  isAuth: false,
  token: null,
  isName: "",
  isError: false,
  isLoading: false,
  data: [],
  isDataLoading: false,
};

export default function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(Reducer, initState);

  console.log(state)
  const handleLogout = () => {
    // console.log("hey")
    dispatch({
      type: "Logout",
      // token: null,
      // isAuth: false,
      // isName: "",
    });
  };
  return (
    <AuthContext.Provider value={[state, dispatch, handleLogout]}>
      {children}
    </AuthContext.Provider>
  );
}
