import {constants} from '../../utils';

export function getRun(sw) {
  let runs = [0, 1, 2, 3, 4, 5, 6, 'out'];

  let scoreWeight = sw;

  let getRandomNo = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  let totalWeight = scoreWeight.reduce(function (prev, cur) {
    return prev + cur;
  });

  let randomNum = getRandomNo(0, totalWeight);
  let weightSum = 0;

  for (let i = 0; i < runs.length; i++) {
    weightSum += scoreWeight[i];
    weightSum = +weightSum.toFixed(2);

    if (randomNum <= weightSum) {
      return runs[i];
    }
  }
}

export const matchStatUpdate = match => {
  const player = match.player1.striker ? 'player1' : 'player2';
  const run = getRun(match[player].scoreWeight);
  let temp = {...match};
  temp.currentScore = run;
  if (run === 'out') {
    temp.outs = temp.outs + 1;
    temp[player].out = true;
    let i = 0;
    do {
      if (
        !temp.players[i].out &&
        temp.player1.id !== temp.players[i].id &&
        temp.player2.id !== temp.players[i].id
      ) {
        temp[player] = temp.players[i];
        temp[player].striker = true;
      }
      i++;
    } while (i < temp.players.length && temp[player].out);
  } else {
    if (run === 1 || run === 3 || run === 5) {
      temp[player].striker = false;
      temp[player === 'player1' ? 'player2' : 'player1'].striker = true;
    }
    temp.totalScore = temp.totalScore + run;
    temp[player].score = temp[player].score + run;
  }
  temp.over = temp.bowl === 5 ? temp.over + 1 : temp.over;
  temp.bowl = temp.bowl === 5 ? 0 : temp.bowl + 1;
  return temp;
};

export const resetMatch = () => {
  const temp = {...constants.matchData};
  temp.players.forEach(pl => {
    pl.out = false;
    pl.score = 0;
    pl.striker = false;
  });
  return temp;
};

export const getResult = match => {
  const {totalScore, over, bowl, outs} = match;
  const isLos = totalScore < 40 || over >= 4 || outs >= 3;
  const isWon = totalScore > 40;
  const out = 3 - outs;
  const sw = out <= 1 ? '' : 's';
  const ball = 4 - over + (over === 4 ? 0 : 6 - bowl);
  const bw = ball <= 1 ? '' : 's';
  return isWon
    ? `Won the match with ${out} wicket${sw} and ${ball} ball${bw}`
    : isLos
    ? `Lost the match with ${3 - outs} wicket${sw} and ${ball} ball${bw}`
    : `Match draw!    Over: ${over}.${bowl}   Score: ${totalScore}  Wicket: ${outs}`;
};
