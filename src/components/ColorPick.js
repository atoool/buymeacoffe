import React from 'react';
import {StyleSheet, Modal, TouchableOpacity} from 'react-native';
import {ColorPicker} from 'react-native-color-picker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {height, width} from '../styles';

export const ColorPick = ({
  show = false,
  onClose = () => {},
  onSetColor = () => {},
}) => {
  return (
    <Modal visible={show}>
      <TouchableOpacity style={styles.close} onPress={onClose}>
        <Icon name="times" size={20} color={'gray'} />
      </TouchableOpacity>
      <ColorPicker onColorSelected={onSetColor} style={styles.colorPicker} />
    </Modal>
  );
};

const styles = StyleSheet.create({
  close: {alignSelf: 'flex-end', margin: 20},
  colorPicker: {
    height: height - 150,
    width: width - 40,
    alignSelf: 'center',
  },
});
