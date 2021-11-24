/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';

export const BgImage = ({children, background, style = {}}) => {
  return (
    <ImageBackground
      style={[
        styles.container,
        {
          backgroundColor:
            background?.primary_color === '#FFFFFF'
              ? 'green'
              : background?.primary_color,
        },
        style,
      ]}
      source={{
        uri: background?.background_image?.optimized ?? '',
      }}>
      {children && children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: 450,
    borderRadius: 24,
    alignItems: 'center',
    padding: 20,
    overflow: 'hidden',
  },
});
