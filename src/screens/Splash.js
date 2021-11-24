/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Loader} from '../components';
import {getItem} from '../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    try {
      async function onMount() {
        const loginInfo = await getItem('loginInfo');
        setTimeout(() => {
          navigation.replace(loginInfo ? 'Home' : 'Login');
        }, 3000);
      }
      onMount();
    } catch {}
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Loader isLoading={true} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sub: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fffcf6',
  },
  logoImage: {
    width: 160,
    height: 160,
  },
});

export default Splash;
