import React, { createContext, useState } from "react";

export const IdContext = createContext();

const Context = (props) => {
  const [cwId, setCWID] = useState(0);
  return (
    <IdContext.Provider value={{ cwId, setCWID }}>
      {props.children}
    </IdContext.Provider>
  );
};

export default Context;
