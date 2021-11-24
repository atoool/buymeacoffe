import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Loader} from '../components';
import {Bio} from '../components/Bio';
import {AppContext} from '../contexts';
import {TopTabNavigator} from '../routes/TopNavigator';
import {width} from '../styles';

export const Customize = ({navigation}) => {
  const {theme, tempTheme, setTempTheme, onSetTheme} =
    React.useContext(AppContext);
  React.useEffect(() => {
    setTempTheme(theme);
  });
  const onSave = () => {
    onSetTheme(tempTheme, true);
    navigation?.goBack();
  };
  return (
    <Loader title="Customize" onSave={onSave}>
      <ScrollView
        contentContainerStyle={styles?.scroll}
        showsVerticalScrollIndicator={false}>
        <Bio themes={tempTheme} />
      </ScrollView>
      <View style={styles.footer}>
        <TopTabNavigator />
      </View>
    </Loader>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 160,
    position: 'absolute',
    bottom: 0,
    width: width,
  },
  scroll: {
    margin: 70,
    marginTop: 40,
  },
});
