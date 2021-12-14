import axios from 'axios';
import {BaseURL} from './BaseURL';

export const getApiData = async (api = '', params = 0) => {
  const api_key = '?api_key=9ToNstwgqa2XRQEESo0b5I1W6BwbTa6r';
  const {data} = await axios
    .get(BaseURL + api + api_key + '&limit=50&offset=' + params)
    .catch(() => {});
  return data ?? [];
};
