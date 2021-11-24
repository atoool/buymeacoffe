import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Colors, Typography} from '../styles';
import {profile} from '../assets';

export const Header = ({title = 'Home', onPress = () => {}}) => {
  const {goBack} = useNavigation();
  const isNotHome = title !== 'Home';
  return (
    <LinearGradient
      style={styles.container}
      colors={[Colors.header1, Colors.header2]}
      angle={5}
      useAngle>
      <View style={styles.left}>
        {isNotHome && (
          <TouchableOpacity onPress={goBack}>
            <Icon
              name={'long-arrow-alt-left'}
              size={20}
              color={Colors.WHITE}
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
        <Text style={Typography.normal15WHITE}>{title}</Text>
      </View>
      <TouchableOpacity onPress={onPress} style={styles.touch}>
        {isNotHome ? (
          <Text style={styles.button}>Save</Text>
        ) : (
          <Image source={profile} style={styles.img} />
        )}
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 96,
    width: '100%',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {width: 20, marginRight: 10},
  button: {
    ...Typography.normal13,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderRadius: 20,
  },
  img: {width: 25, height: 25, alignSelf: 'flex-end', marginBottom: -2},
  left: {flexDirection: 'row'},
});
