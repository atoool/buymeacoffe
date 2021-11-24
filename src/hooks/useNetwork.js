/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';

const useNetwork = ({onChangeNetwork}) => {
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      onChangeNetwork(!state?.isConnected);
    });
    return unsubscribe;
  }, []);
};

export default useNetwork;
