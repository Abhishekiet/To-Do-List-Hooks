import React, { createContext } from "react";

const newContext  =  createContext() ;
const Provider = newContext.Provider ;
const Consumer = newContext.Consumer ;

export { Provider , Consumer }