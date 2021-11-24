/* eslint-disable radix */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ColorPick} from '.';
import {AppContext} from '../contexts';
import {Typography, width} from '../styles';

const buttonStyles = [
  {
    border_type: '0px solid #000000',
    border_color: null,
    border_radius: '30px',
    primary_color: '#000000',
  },
  {
    border_type: '0px solid #000000',
    border_color: null,
    border_radius: '8px',
    primary_color: '#000000',
  },
  {
    border_type: '0px solid #000000',
    border_color: null,
    border_radius: '0px',
    primary_color: '#000000',
  },
  {
    border_type: '1px solid #000000',
    border_color: '#000000',
    border_radius: '30px',
    primary_color: '#00000000',
  },
  {
    border_type: '1px solid #000000',
    border_color: '#000000',
    border_radius: '8px',
    primary_color: '#00000000',
  },
  {
    border_type: '1px solid #000000',
    border_color: '#000000',
    border_radius: '0px',
    primary_color: '#00000000',
  },
];
export const Buttons = () => {
  const {setTempTheme, tempTheme} = React.useContext(AppContext);

  const [show, setShow] = React.useState(false);
  const [color, setColor] = React.useState('#000000');
  const [index, setIndex] = React.useState(0);

  const onSetColor = c => setColor(c);

  const onClose = () => {
    if (color) {
      let temp1 = {...tempTheme};
      let temp2 = [...buttonStyles];
      index < 3
        ? (temp2[index].primary_color = color)
        : (temp2[index].border_color = color);
      temp1.style.button = temp2[index];
      setTempTheme(temp1);
    }
    setShow(false);
  };

  const onApplyTheme = i => {
    let temp = {...tempTheme};
    temp.style.button = buttonStyles[i];
    setTempTheme(temp);
    setIndex(i);
  };

  return (
    <>
      <TouchableOpacity style={styles.iconBox} onPress={() => setShow(true)}>
        <Icon name="fill" color="gray" size={13} />
        <Text style={styles.icon}>{color}</Text>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.scroll}>
        {buttonStyles?.map((f, i) => (
          <TouchableOpacity
            onPress={() => onApplyTheme(i)}
            key={i}
            style={[
              styles.touchBox,
              {
                borderColor: i === index ? '#0095F6' : '#00000000',
                borderRadius:
                  (parseInt(f?.border_radius?.match(/(\d+)/)[0]) ?? 0) + 2,
              },
            ]}>
            <View
              style={[
                styles.textBox,
                {
                  borderRadius:
                    parseInt(f?.border_radius?.match(/(\d+)/)[0]) ?? 0,
                  borderWidth: isNaN(
                    parseInt(f?.border_type?.split(' ')[0]?.match(/(\d+)/)[0]),
                  )
                    ? 0
                    : parseInt(
                        f?.border_type?.split(' ')[0]?.match(/(\d+)/)[0],
                      ),
                  borderStyle: f?.border_type?.split(' ')[1] ?? 'solid',
                  borderColor: f?.border_color,
                  backgroundColor: f?.primary_color,
                },
              ]}
            />
          </TouchableOpacity>
        ))}
        <ColorPick show={show} onClose={onClose} onSetColor={onSetColor} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  textBox: {
    width: 105,
    height: 25,
  },
  touchBox: {
    marginBottom: 5,
    marginRight: 5,
    borderWidth: 2,
  },
  iconBox: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
  },
  icon: {
    ...Typography.normal13,
    color: 'gray',
    marginLeft: 5,
  },
  scroll: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: width,
    margin: 10,
    marginTop: 5,
  },
});
