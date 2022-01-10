import {StyleSheet} from 'react-native';
import {Colors, Typography} from '../../styles';

export const styles = StyleSheet.create({
  scoreBox: {flex: 1, flexDirection: 'row'},
  statusBox: {flex: 1, marginTop: 40},
  scoreText: {...Typography.normal14},
  overText: {...Typography.normal14},
  runText: {...Typography.normal17},
  runNumText: {...Typography.bold70, marginTop: 10},
  striker: {...Typography.normal14},
  runsBox: {flex: 1, alignItems: 'flex-end'},
  playerBox: {
    flex: 2,
    alignSelf: 'center',
    width: '70%',
    borderColor: Colors.BLACK,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 5,
  },
  bowlButton: {
    borderColor: Colors.BLACK,
    borderWidth: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 40,
  },
  bowlText: {...Typography.normal14},
  container: {flex: 1, alignSelf: 'center', justifyContent: 'center'},
});
