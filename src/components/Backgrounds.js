/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {BgImage, ColorPick} from '.';
import {AppContext} from '../contexts';
import {Typography, width} from '../styles';

export const Backgrounds = () => {
  const {db, setTempTheme, tempTheme} = React.useContext(AppContext);

  const [show, setModal] = React.useState(false);
  const [themes, setThemes] = React.useState(db?.themes);
  const [color, setColor] = React.useState(null);
  const [index, setIndex] = React.useState(-1);

  const pickImage = async () => {
    const result = await launchImageLibrary();
    try {
      if (!result?.didCancel) {
        let temp1 = {...tempTheme};
        let temp2 = [...themes];
        let temp3 = {
          style: {
            background: {background_image: {optimized: result?.assets[0]?.uri}},
          },
        };
        temp2.push(temp3);
        setThemes(temp2);
        setIndex(temp2?.length - 1);
        temp1.style.background = temp3?.style?.background;
        setTempTheme(temp1);
      }
    } catch {}
  };
  const pickColor = () => setModal(true);
  const onSetColor = c => setColor(c);
  const onClose = () => {
    try {
      if (color) {
        let temp1 = {...tempTheme};
        let temp2 = [...themes];
        let temp3 = {
          style: {
            background: {primary_color: color},
          },
        };
        temp2.push(temp3);
        setThemes(temp2);
        setIndex(temp2?.length - 1);
        temp1.style.background = temp3?.style?.background;
        setTempTheme(temp1);
      }
    } catch {}
    setModal(false);
  };

  const onApplyTheme = (background, i) => {
    try {
      if (background) {
        let temp1 = {...tempTheme};
        let temp2 = {
          style: {
            background,
          },
        };
        temp1.style.background = temp2?.style?.background;
        setTempTheme(temp1);
        setIndex(i);
      }
    } catch {}
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsHorizontalScrollIndicator={false}
      horizontal>
      <TouchableOpacity style={styles.addBox} onPress={pickImage}>
        <Icon name="image" size={18} color={'gray'} />
        <Text style={Typography.normal10}>Image</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.addBox} onPress={pickColor}>
        <Icon name="palette" size={16} color={'gray'} />
        <Text style={Typography.normal10}>Solid</Text>
      </TouchableOpacity>
      {themes?.map((f, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => onApplyTheme(f?.style?.background, i)}>
          {i === index && (
            <Icon
              name="times-circle"
              solid={true}
              size={13}
              color="#0095F6"
              style={styles.icon}
            />
          )}
          <BgImage
            background={f?.style?.background}
            style={[
              styles.themeBox,
              {
                borderWidth: 2,
                borderColor: i === index ? '#0095F6' : '#00000000',
              },
            ]}
          />
        </TouchableOpacity>
      ))}
      <ColorPick show={show} onClose={onClose} onSetColor={onSetColor} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  themeBox: {
    height: 85,
    width: 70,
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBox: {
    borderStyle: 'dashed',
    borderWidth: 1,
    height: 85,
    width: 70,
    borderRadius: 10,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: width,
    flexDirection: 'row',
  },
  contentContainer: {alignItems: 'center', paddingHorizontal: 10},
  icon: {
    position: 'absolute',
    right: 0,
    top: -5,
    zIndex: 2,
    backgroundColor: '#f5f5f5',
    padding: 2,
    borderRadius: 10,
  },
});
