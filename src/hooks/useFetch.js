import React from 'react';
import {useQuery} from 'react-query';
import {getApiData} from '../api';

export const useFetch = (
  api = '',
  offset = 0,
  state = [],
  setState = () => {},
  enabled = true,
  search = '',
) => {
  const isSearch = api === 'search';
  const [load, setLoad] = React.useState(true);
  const {data, isLoading, isError, refetch, isRefetching} = useQuery(
    isSearch ? [api, search] : api,
    () => getApiData(api, isSearch ? offset + '&q=' + search : offset),
    {enabled: isSearch ? Boolean(search) : enabled},
  );

  const getData = async () => {
    try {
      const tempData = [...state];
      data?.data
        ?.map(gif => gif?.images.fixed_height_downsampled)
        ?.forEach(img => {
          tempData.push({
            uri: img?.url,
            dimensions: {width: img?.width, height: img?.height},
          });
        });
      setState(tempData);
      setLoad(false);
    } catch {
      setLoad(false);
    }
  };

  React.useEffect(() => {
    enabled && getData().catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, offset, enabled]);

  return {data, isLoading: isLoading || load, isError, refetch, isRefetching};
};
