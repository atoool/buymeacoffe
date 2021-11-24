import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async (key, value, stringify = true) => {
  try {
    typeof value !== 'string' && (value = JSON.stringify(value));
    await AsyncStorage.setItem(key, value);
  } catch (e) {}
};

export const multiSet = async keyValues => {
  try {
    keyValues = keyValues.map(i =>
      typeof i[1] === 'string' ? [i[0], i[1]] : [i[0], JSON.stringify(i[1])],
    );
    await AsyncStorage.multiSet(keyValues);
  } catch (e) {}
};

export const getItem = async (key, parse = true) => {
  try {
    let value = await AsyncStorage.getItem(key);
    if (value === null) {
      return null;
    }
    parse && (value = JSON.parse(value));
    return value;
  } catch (e) {}
};

export const multiGet = async keys => {
  try {
    let values = await AsyncStorage.multiGet(keys);
    if (values === null) {
      return null;
    }
    values = values.map(i =>
      JSON.parse(i[1]) ? [i[0], JSON.parse(i[1])] : [i[0], i[1]],
    );
    return values;
  } catch {}
};

export const removeItem = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {}
};

export const getLocale = async () => {
  let jsonValue = await getItem('locale').catch();
  return jsonValue ? jsonValue : null;
};
export const setLocaleLang = async locale => {
  await setItem('locale', locale).catch();
};
export const getUserAccessToken = async () => {
  return '';
};
