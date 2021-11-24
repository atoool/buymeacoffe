/* eslint-disable react-hooks/exhaustive-deps */
import {useFocusEffect} from '@react-navigation/core';
import {useCallback} from 'react';
import {BackHandler} from 'react-native';

export const useBackHandler = ({onBackPress = () => {}, enable = true}) => {
  useFocusEffect(
    useCallback(() => {
      const back = () => {
        enable && onBackPress();
        return enable;
      };
      BackHandler.addEventListener('hardwareBackPress', back);
      return () => BackHandler.removeEventListener('hardwareBackPress', back);
    }, [enable]),
  );
};
