import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import {Loader} from '.';
import {Colors, Typography} from '../styles';

export const Wrapper = ({children, isLoading = false, isError = false}) => {
  const isLoaded = !isLoading && !isError;
  return (
    <SafeAreaView style={isLoaded ? styles.container2 : styles.container1}>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Text style={Typography.normal17}>Something went wrong</Text>
      ) : (
        children
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container1: {
    position: 'absolute',
    zIndex: 100,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {flex: 1, backgroundColor: Colors.background},
});
