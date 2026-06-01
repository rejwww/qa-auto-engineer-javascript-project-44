#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { resultOfGame, resultOfRound } from '../../src/index.js';

const Calculator = () => {
  console.log('What is the result of the expression?');

  let flag = false;
  let i = 0;

  while (flag === false && i < 3) {
    let correctAnswer;
    const randomNumber1 = Math.floor(Math.random() * 100);
    const randomNumber2 = Math.floor(Math.random() * 100);
    const arrMathSign = ['+', '-', '*'];

    const randomMathSign = Math.floor(Math.random() * arrMathSign.length);

    const userAnswer = readlineSync.question(
      `Question: ${randomNumber1} ${arrMathSign[randomMathSign]} ${randomNumber2} `,
    );

    switch (arrMathSign[randomMathSign]) {
      case '+':
        correctAnswer = randomNumber1 + randomNumber2;
        break;
      case '-':
        correctAnswer = randomNumber1 - randomNumber2;
        break;
      case '*':
        correctAnswer = randomNumber1 * randomNumber2;
        break;
    }

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

console.log(Calculator());
