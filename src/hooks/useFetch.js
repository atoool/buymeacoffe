import {useQuery} from 'react-query';
import {getData} from '../api';

export const useFetch = (api = '') => {
  const {data, error, isError, isLoading} = useQuery(api, () => getData(api));
  return {data, error, isError, isLoading};
};
