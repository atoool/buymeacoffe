import React from 'react';
import {StyleSheet, ActivityIndicator, SafeAreaView, Text} from 'react-native';
import {Colors, Typography} from '../styles';
import {Header} from './Header';

const Loader = ({
  children,
  title,
  isLoading = false,
  isError = false,
  onSave = () => {},
}) => {
  const isLoaded = !isLoading && !isError;
  return (
    <SafeAreaView style={isLoaded ? styles.container2 : styles.container1}>
      {isLoading ? (
        <ActivityIndicator
          color={Colors.BLACK}
          size={26}
          style={styles.loader}
        />
      ) : isError ? (
        <Text style={Typography.normal17}>Something went wrong</Text>
      ) : (
        <>
          {title && <Header title={title} onPress={onSave} />}
          {children}
        </>
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
  loader: {
    backgroundColor: Colors.WHITE,
    elevation: 5,
    borderRadius: 40,
    height: 40,
    width: 40,
  },
});

export default Loader;
