import React from 'react';
import {Platform, StatusBar} from 'react-native';
import {Colors} from '../styles';

const useStatusbar = (color = Colors.transparent) => {
  React.useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(color);
      StatusBar.setTranslucent(true);
    }
    StatusBar.setBarStyle('dark-content');
  }, [color]);
};

export default useStatusbar;
