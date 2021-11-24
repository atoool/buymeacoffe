/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ColorPick} from '.';
import {AppContext} from '../contexts';
import {Typography, width} from '../styles';

const fonts = [
  {font_type: "'Inter',sans-serif"},
  {font_type: "'Antipasto',sans-serif"},
  {font_type: "'DM Sans',sans-serif"},
  {font_type: "'Poppins',sans-serif"},
  {font_type: "'BebasNeue',sans-serif"},
  {font_type: "'Charm',sans-serif"},
  {font_type: "'Teko',sans-serif"},
  {font_type: "'Varela',sans-serif"},
];

export const Fonts = () => {
  const {setTempTheme, tempTheme} = React.useContext(AppContext);

  const [show, setShow] = React.useState(false);
  const [color, setColor] = React.useState('#000000');
  const [index, setIndex] = React.useState(0);

  const onClose = () => {
    let temp = {...tempTheme};
    temp.style.background.text_color = color;
    setTempTheme(temp);
    setShow(false);
  };
  const onSetColor = c => setColor(c);
  const onApplyTheme = i => {
    let temp = {...tempTheme};
    temp.style.font = fonts[i];
    setTempTheme(temp);
    setIndex(i);
  };
  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsHorizontalScrollIndicator={false}
        horizontal>
        {fonts.map((f, i) => (
          <TouchableOpacity
            onPress={() => onApplyTheme(i)}
            key={i}
            style={[styles.fontBox, index === i && {borderColor: '#0095F6'}]}>
            {index === i && (
              <>
                <View style={[styles.tickIcon, styles.tickBox]} />
                <Icon
                  name="check"
                  color="#fff"
                  size={10}
                  style={styles.tickIcon}
                />
              </>
            )}
            <Text
              style={[
                Typography.normal17,
                f?.font_type && {
                  fontFamily: f?.font_type?.split(',')[0].replace(/'/g, ''),
                },
              ]}>
              Aa
            </Text>
          </TouchableOpacity>
        ))}
        <ColorPick show={show} onClose={onClose} onSetColor={onSetColor} />
      </ScrollView>
      <TouchableOpacity style={styles.iconBox} onPress={() => setShow(true)}>
        <Icon name="fill" color="gray" size={13} />
        <Text style={styles.icon}>{color}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    flexDirection: 'row',
  },
  contentContainer: {alignItems: 'center', paddingHorizontal: 10},
  fontBox: {
    width: 65,
    height: 65,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'lightgray',
    marginRight: 5,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBox: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'center',
  },
  icon: {
    ...Typography.normal13,
    color: 'gray',
    marginLeft: 5,
  },
  tickIcon: {
    position: 'absolute',
    right: 2,
    top: 2,
    borderRadius: 10,
  },
  tickBox: {
    backgroundColor: '#0095F6',
    padding: 15,
    top: -12,
    right: -12,
    borderRadius: 15,
  },
});
