#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { resultOfGame, resultOfRound } from '../../src/index.js';

const checkingForParity = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let flag = false;
  let i = 0;

  while (flag === false && i < 3) {
    let correctAnswer;
    const randomNumber = Math.floor(Math.random() * 1000);

    const userAnswer = readlineSync.question(`'Question:' ${randomNumber} `);

    if (randomNumber % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      i++;
    } else {
      flag = true;
      console.log(resultOfRound(userAnswer, correctAnswer));
    }
  }

  return resultOfGame(flag);
};

console.log(checkingForParity());
