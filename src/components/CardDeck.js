import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {width} from '../styles';

export const CardDeck = ({Card, refCarousel, data, setActiveIndex}) => {
  return (
    <Carousel
      ref={refCarousel}
      data={data}
      renderItem={Card}
      sliderWidth={width - 140}
      itemWidth={width - 140}
      layout={'tinder'}
      layoutCardOffset={0}
      onSnapToItem={setActiveIndex}
    />
  );
};
