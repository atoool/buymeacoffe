const bundleId = 'com.cricket';
const players = [
  {
    id: 1,
    name: 'Kirat Bohli',
    score: 0,
    out: false,
    scoreWeight: [0.05, 0.3, 0.25, 0.1, 0.15, 0.01, 0.09, 0.05],
    striker: true,
  },
  {
    id: 2,
    name: 'NS Nodhi',
    score: 0,
    out: false,
    scoreWeight: [0.1, 0.4, 0.2, 0.05, 0.1, 0.01, 0.04, 0.1],
    striker: false,
  },
  {
    id: 3,
    name: 'R Rumrah',
    score: 0,
    out: false,
    scoreWeight: [0.2, 0.3, 0.15, 0.05, 0.05, 0.01, 0.04, 0.2],
    striker: false,
  },
  {
    id: 4,
    name: 'Shashi Henra',
    score: 0,
    out: false,
    scoreWeight: [0.3, 0.25, 0.05, 0.0, 0.05, 0.01, 0.04, 0.3],
    striker: false,
  },
];
export const constants = {
  bundleId,
  version: '1.17.38',
  buildNumber: 36,
  matchData: {
    totalScore: 0,
    currentScore: 0,
    over: 0,
    bowl: 0,
    outs: 0,
    player1: players[0],
    player2: players[1],
    players,
  },
};
