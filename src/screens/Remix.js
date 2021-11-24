/* eslint-disable radix */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, TouchableOpacity, View, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {BgImage, CardDeck, Loader} from '../components';
import {Bio} from '../components/Bio';
import {AppContext} from '../contexts';
import {Colors, width} from '../styles';

export const Remix = ({navigation}) => {
  const [theme, setTheme] = React.useState(null);
  const [index, setIndex] = React.useState(0);
  const {db, onSetTheme} = React.useContext(AppContext);
  let refCarousel = React.useRef().current;

  const onSetTryTheme = (val, i) => {
    setTheme(val);
    setIndex(i);
    refCarousel?.snapToItem(i);
  };
  const onSaveTheme = () => {
    theme && onSetTheme(theme);
    navigation?.goBack();
  };
  const goTo = () => navigation.navigate('Custom');
  return (
    <Loader title="Remix" onSave={onSaveTheme}>
      <ScrollView
        contentContainerStyle={styles?.scroll}
        showsVerticalScrollIndicator={false}>
        <CardDeck
          data={db?.themes}
          Card={({item}) => <Bio themes={item} />}
          refCarousel={r => (refCarousel = r)}
          setActiveIndex={i => setIndex(i)}
        />
      </ScrollView>
      <ScrollView
        style={styles.footer}
        contentContainerStyle={styles.footerContainer}
        showsVerticalScrollIndicator={false}
        horizontal>
        <TouchableOpacity style={styles.addBox} onPress={goTo}>
          <Icon name="plus" />
        </TouchableOpacity>
        {db?.themes?.map((f, i) => (
          <TouchableOpacity key={i} onPress={() => onSetTryTheme(f, i)}>
            <BgImage
              background={f?.style?.background}
              style={[
                styles.themeBox,
                index === i && {borderWidth: 2, borderColor: '#0095F6'},
              ]}>
              {[1, 2, 3].map((j, key) => (
                <View
                  key={key}
                  style={[
                    styles.textBox,
                    {
                      borderRadius:
                        parseInt(
                          f?.style?.button?.border_radius?.match(/(\d+)/)[0],
                        ) ?? 0,
                      borderWidth: isNaN(
                        parseInt(
                          f?.style?.button?.border_type
                            ?.split(' ')[0]
                            ?.match(/(\d+)/)[0],
                        ),
                      )
                        ? 0
                        : parseInt(
                            f?.style?.button?.border_type
                              ?.split(' ')[0]
                              ?.match(/(\d+)/)[0],
                          ),
                      borderStyle:
                        f?.style?.button?.border_type?.split(' ')[1] ?? 'solid',
                      borderColor: f?.style?.button?.border_color,
                      backgroundColor: f?.style?.button?.primary_color,
                    },
                  ]}
                />
              ))}
            </BgImage>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Loader>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 114,
    position: 'absolute',
    bottom: 0,
    width: width,
    flexDirection: 'row',
    backgroundColor: Colors.WHITE,
  },
  footerContainer: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  img: {height: 25, width: 18.3},
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
  themeBox: {
    height: 85,
    width: 70,
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBox: {
    width: 40,
    height: 10,
    marginBottom: 5,
  },
  scroll: {
    alignItems: 'center',
    marginTop: 40,
  },
});
