import axios from 'axios';

export const getData = async (api = '') => {
  const {data} = await axios
    .get('http://my-json-server.typicode.com/shakeebM/APISim/' + api)
    .catch(() => {});
  return data ?? [];
};
