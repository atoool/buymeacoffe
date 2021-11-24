import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import {custom, remix} from '../assets';
import {Loader} from '../components';
import {Bio} from '../components/Bio';
import {Colors} from '../styles';

export const Home = ({navigation}) => {
  const goTo = (to = 'Remix') => navigation.navigate(to);
  return (
    <Loader title="Home">
      <ScrollView
        contentContainerStyle={styles?.scroll}
        showsVerticalScrollIndicator={false}>
        <Bio />
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => goTo('Remix')}>
          <Image source={remix} style={styles.img} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => goTo('Custom')}>
          <Image source={custom} style={styles.img} />
        </TouchableOpacity>
      </View>
    </Loader>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  footer: {
    height: 114,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },
  img: {height: 25, width: 18.3},
  scroll: {
    margin: 70,
    marginTop: 40,
  },
});
