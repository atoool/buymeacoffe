/* eslint-disable react-hooks/exhaustive-deps */
import React, {createContext, useEffect} from 'react';
import {Loader} from '../components';
import {useFetch} from '../hooks';
import {getItem, setItem} from '../utils';

export const AppContext = createContext({
  db: [],
  theme: {},
  onSetTheme: () => {},
  tempTheme: {},
  setTempTheme: () => {},
});

export const AppContextProvider = ({children}) => {
  const [db, setDB] = React.useState([]);
  const [theme, setTheme] = React.useState({});
  const [load, setLoad] = React.useState(true);
  const [tempTheme, setTempTheme] = React.useState(theme);

  const {data, isLoading, isError} = useFetch('db');

  const onSetTheme = async (val, newTheme = false) => {
    setTheme(val);
    setTempTheme(val);
    const temp = {...db};
    if (newTheme) {
      temp.themes.push(val);
      setDB(temp);
    }
    await onSave(temp, val).catch(() => {});
  };

  const onSave = async (dbs, val) => {
    theme && (await setItem('theme', val));
    dbs && (await setItem('dbs', dbs));
  };

  useEffect(() => {
    const getAllData = async () => {
      try {
        const temp = await getItem('dbs');
        const themeTemp = await getItem('theme');
        setDB(temp ? {...data, ...temp} : data);
        setTheme(themeTemp ?? data?.themes[0]);
        setTempTheme(themeTemp ?? data?.themes[0]);
      } catch {}
      setLoad(false);
    };
    getAllData().catch(() => {});
  }, [isLoading]);

  const value = {db, theme, onSetTheme, tempTheme, setTempTheme};

  return (
    <Loader isLoading={isLoading || load} isError={isError}>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </Loader>
  );
};
