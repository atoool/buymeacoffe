import React, {createContext} from 'react';
import {Wrapper} from '../components';
import {useFetch} from '../hooks';

export const AppContext = createContext({
  trending: [],
  setTrending: () => {},
  trendOffset: 0,
  setTrendOffset: () => {},
  refetch: () => {},
  isRefetching: false,
  getData: () => {},
});

export const AppContextProvider = ({children}) => {
  const [trending, setTrending] = React.useState([]);
  const [trendOffset, setTrendOffset] = React.useState(0);

  const {isLoading, isError, refetch, isRefetching} = useFetch(
    'trending',
    trendOffset,
    trending,
    setTrending,
  );

  const value = {
    trending,
    setTrending,
    trendOffset,
    setTrendOffset,
    refetch,
    isRefetching,
  };

  return (
    <Wrapper isLoading={isLoading} isError={isError}>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </Wrapper>
  );
};
