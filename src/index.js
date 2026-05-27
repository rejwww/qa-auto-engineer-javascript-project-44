import { userName } from './cli.js';

const resultOfGame = (flag) => {
  let resultGame;

  if (flag === true) {
    resultGame = `Let's try again, ${userName}!`;
  } else {
    resultGame = `Congratulations, ${userName}!`;
  }

  return resultGame;
};

const resultOfRound = (userAnswer, correctAnswer) => {
  const resultRound = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;

  return resultRound;
};

function arithmeticРrogressionСalc(start, step, length) {
  const resultArr = [];
  let currentElement;
  for (let i = 0; i < length; i++) {
    currentElement = start + i * step;
    resultArr.push(currentElement);
  }
  return resultArr;
}

export { resultOfGame, resultOfRound, arithmeticРrogressionСalc };
