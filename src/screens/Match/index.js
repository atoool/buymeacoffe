import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Wrapper} from '../../components';
import {constants} from '../../utils';
import {styles} from './styles';
import {matchStatUpdate, resetMatch, getResult} from './utils';

export const Match = () => {
  const [match, setMatch] = React.useState(constants.matchData);

  const {totalScore, currentScore, outs, over, bowl, player1, player2} = match;
  const isNotEnd = outs < 3 && totalScore <= 40 && over < 4;

  const onBowl = () => {
    if (isNotEnd) {
      const temp = matchStatUpdate(match);
      setMatch(temp);
    }
  };

  const onReset = () => {
    const temp = resetMatch();
    setMatch(temp);
  };

  return (
    <Wrapper>
      {isNotEnd ? (
        <>
          <View style={styles.scoreBox}>
            <View style={styles.statusBox}>
              <Text style={styles.scoreText}>
                Score: {totalScore}-{outs}
              </Text>
              <Text style={styles.overText}>
                Overs: {over}.{bowl}
              </Text>
            </View>
            <View style={styles.runsBox}>
              <Text style={styles.runNumText}>{currentScore}</Text>
              <Text style={styles.runText}>Runs</Text>
            </View>
          </View>
          <View style={styles.playerBox}>
            <Text style={styles.striker}>
              {player1.name}({player1.score}){player1.striker ? '*' : ''}
            </Text>
            <Text style={styles.striker}>
              {player2.name}({player2.score}){player2.striker ? '*' : ''}
            </Text>
          </View>
          <TouchableOpacity style={styles.bowlButton} onPress={onBowl}>
            <Text style={styles.bowlText}>Bowl</Text>
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.container}>
          <Text style={styles.scoreText}>{getResult(match)}</Text>
        </View>
      )}
      <TouchableOpacity style={styles.bowlButton} onPress={onReset}>
        <Text style={styles.bowlText}>Reset</Text>
      </TouchableOpacity>
    </Wrapper>
  );
};
