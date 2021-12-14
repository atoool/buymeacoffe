import React from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {Colors} from '../styles';

export const Loader = ({style = {}}) => {
  return (
    <ActivityIndicator
      color={Colors.BLACK}
      size={26}
      style={[styles.loader, style]}
    />
  );
};

const styles = StyleSheet.create({
  loader: {
    backgroundColor: Colors.WHITE,
    elevation: 5,
    borderRadius: 40,
    height: 40,
    width: 40,
  },
});

export default Loader;
