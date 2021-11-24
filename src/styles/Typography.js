import {Platform, StyleSheet} from 'react-native';
import Colors from './Colors';

const fontFamily = Platform.OS === 'ios' ? 'Varela round' : 'Varela';
export default StyleSheet.create({
  bold30: {
    fontWeight: 'bold',
    fontSize: 30,
    flexWrap: 'wrap',
    fontFamily,
    color: Colors.BLACK,
  },
  bold30White: {
    fontWeight: 'bold',
    fontSize: 30,
    color: Colors.WHITE,

    flexWrap: 'wrap',
    fontFamily,
  },
  bold26: {
    fontWeight: 'bold',
    fontSize: 26,
    color: Colors.BLACK,
    flexWrap: 'wrap',
    fontFamily,
  },
  bold26White: {
    fontWeight: 'bold',
    fontSize: 26,
    color: Colors.WHITE,
    flexWrap: 'wrap',
    fontFamily,
  },
  normal21: {
    fontSize: 21,
    color: Colors.BLACK,
    flexWrap: 'wrap',
    fontFamily,
  },
  bold21: {
    fontWeight: 'bold',
    fontSize: 21,

    color: Colors.BLACK,
    flexWrap: 'wrap',
    fontFamily,
  },
  bold20White: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.WHITE,
    flexWrap: 'wrap',
    fontFamily,
  },
  bold20: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.BLACK,
    flexWrap: 'wrap',
    fontFamily,
  },
  normal18: {
    fontSize: 18,
    color: Colors.BLACK,
    flexWrap: 'wrap',
    fontFamily,
  },
  bold17: {
    fontWeight: 'bold',
    fontSize: 17,
    color: Colors.BLACK,
    flexWrap: 'wrap',
    fontFamily,
  },
  bold17White: {
    fontWeight: 'bold',
    fontSize: 17,
    color: Colors.WHITE,
    flexWrap: 'wrap',
    fontFamily,
  },
  normal17: {
    fontSize: 17,
    color: Colors.BLACK,
    flexWrap: 'wrap',
    fontFamily,
  },
  normal17WHITE: {
    fontSize: 17,
    color: Colors.WHITE,
    flexWrap: 'wrap',
    fontFamily,
  },
  bold16: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.BLACK,
    flexWrap: 'wrap',
    fontFamily,
  },
  bold16White: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.WHITE,

    flexWrap: 'wrap',
    fontFamily,
  },
  bold15: {
    fontWeight: 'bold',
    fontSize: 15,
    color: Colors.BLACK,
    flexWrap: 'wrap',
    fontFamily,
  },
  normal15: {
    fontSize: 15,
    color: Colors.BLACK,
    flexWrap: 'wrap',
    fontFamily,
  },
  normal15WHITE: {
    fontSize: 15,
    color: Colors.WHITE,
    flexWrap: 'wrap',
    fontFamily,
  },
  normal14: {
    fontSize: 14,

    color: Colors.BLACK,
    flexWrap: 'wrap',
    fontFamily,
  },
  normal14WHITE: {
    fontSize: 14,

    color: Colors.WHITE,
    flexWrap: 'wrap',
    fontFamily,
  },
  normal13: {
    fontSize: 13,

    color: Colors.BLACK,
    flexWrap: 'wrap',
    fontFamily,
  },
  bold13: {
    fontWeight: 'bold',
    fontSize: 13,

    color: Colors.BLACK,
    flexWrap: 'wrap',
    fontFamily,
  },
  bold13White: {
    fontWeight: 'bold',
    fontSize: 13,
    color: Colors.WHITE,

    flexWrap: 'wrap',
    fontFamily,
  },
  bold10White: {
    fontWeight: 'bold',
    fontSize: 10,
    color: Colors.WHITE,

    flexWrap: 'wrap',
    fontFamily,
  },
  normal12: {
    fontSize: 12,

    flexWrap: 'wrap',
    fontFamily,
  },
  normal12White: {
    fontSize: 12,
    color: Colors.WHITE,
    flexWrap: 'wrap',
    fontFamily,
  },

  normal10: {
    fontSize: 10,
    color: 'gray',
    flexWrap: 'wrap',
    fontFamily,
  },
  h4: {
    fontSize: 20,

    flexWrap: 'wrap',
    fontFamily,
  },
  h5: {
    fontSize: 18,

    flexWrap: 'wrap',
    fontFamily,
  },
  h6: {
    fontSize: 18,

    flexWrap: 'wrap',
    fontFamily,
  },
});
