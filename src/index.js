import readlineSync from 'readline-sync';
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

function arithmeticProgressionCalc(start, step, length) {
  const resultArr = [];
  let currentElement;
  for (let i = 0; i < length; i++) {
    currentElement = start + i * step;
    resultArr.push(currentElement);
  }
  return resultArr;
}

const run = (startText, gameQuestionAnswer) => {
  console.log(startText);

  let flag = false;
  let i = 0;
  const round = 3;

  while (flag === false && i < round) {
    //вопрос
    const [question, correctAnswer] = gameQuestionAnswer();

    //правильный ответ
    const userAnswer = readlineSync.question(`Question: ${question} `);

    if (userAnswer === String(correctAnswer)) {
      console.log('Correct!');
      i++;
    } else {
      flag = true;
      console.log(resultOfRound(userAnswer, correctAnswer));
    }
  }

  return resultOfGame(flag);
};

export { resultOfGame, resultOfRound, arithmeticProgressionCalc, run };
