import React from 'react';
import {AppContext, AppContextProvider} from './AppContext';
export {AppContext, AppContextProvider};

export const Provider = ({children}) => {
  return <AppContextProvider>{children}</AppContextProvider>;
};
