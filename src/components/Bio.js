/* eslint-disable radix */
import React from 'react';
import {View, Text, StyleSheet, Image, Linking, LogBox} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {BgImage} from '.';
import {AppContext} from '../contexts';
import {Typography, width} from '../styles';
LogBox.ignoreLogs(['source.uri']);
export const Bio = ({themes = null}) => {
  const {db, theme} = React.useContext(AppContext);
  const {style} = themes ?? theme;
  const {profile_picture, title, bio_line, social_links} = db?.pages[0];
  const links = db?.pageitems;
  const fontFamily = style?.font
    ? {
        fontFamily: style?.font?.font_type?.split(',')[0].replace(/'/g, ''),
        color: style?.background?.text_color,
      }
    : {};
  const buttonStyle = {
    borderRadius: style?.button?.border_radius
      ? parseInt(style?.button?.border_radius?.match(/(\d+)/)[0])
      : 0,
    borderWidth: isNaN(
      parseInt(style?.button?.border_type?.split(' ')[0]?.match(/(\d+)/)[0]),
    )
      ? 0
      : parseInt(style?.button?.border_type?.split(' ')[0]?.match(/(\d+)/)[0]),
    borderStyle: style?.button?.border_type?.split(' ')[1] ?? 'solid',
    borderColor: style?.button?.border_color,
    backgroundColor: style?.button?.primary_color,
  };

  return (
    <BgImage background={style?.background}>
      <Image source={{uri: profile_picture?.optimized}} style={styles.img} />
      <Text style={[styles.name, fontFamily]}>{title}</Text>
      <Text style={[styles.desc, fontFamily]}>{bio_line}</Text>
      <View style={styles.iconBox}>
        {social_links?.map((f, i) => (
          <TouchableOpacity key={i} onPress={() => Linking.openURL(f?.url)}>
            <Icon
              name={
                f?.social_type === 'facebook'
                  ? 'facebook-f'
                  : f?.social_type === 'twitter'
                  ? 'twitter'
                  : 'envelope'
              }
              color={style?.background?.text_color}
            />
          </TouchableOpacity>
        ))}
      </View>
      {links?.map(
        (f, i) =>
          f?.thumbnail && (
            <TouchableOpacity
              style={[styles.linkBox, buttonStyle]}
              key={i}
              onPress={() => Linking.openURL(f?.url)}>
              <Image
                source={{uri: f?.thumbnail?.optimized}}
                style={styles.icon}
              />
              <Text style={[styles.linkTxt, fontFamily]}>{f?.title}</Text>
            </TouchableOpacity>
          ),
      )}
    </BgImage>
  );
};

const styles = StyleSheet.create({
  img: {width: 50, height: 50, borderRadius: 50},
  name: {...Typography.normal14WHITE, marginVertical: 5},
  desc: {...Typography.normal12White},
  iconBox: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 20,
  },
  icon: {
    width: 20,
    height: 20,
    borderRadius: 20,
    position: 'absolute',
    left: 10,
  },
  linkBox: {
    borderColor: '#fff',
    borderWidth: 1,
    flexDirection: 'row',
    width: width - 180,
    padding: 10,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  linkTxt: {...Typography.normal12White, alignSelf: 'center'},
  blur: {flex: 1},
});
