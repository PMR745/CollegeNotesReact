import React, { createContext } from "react";


//Initial state
const initialState = {
    transactions: ["Hello", "World"]
}

export const GlobalContext = createContext(initialState);