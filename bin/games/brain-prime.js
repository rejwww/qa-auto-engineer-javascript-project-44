#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { resultOfGame, resultOfRound } from '../../src/index.js';

const primeNumberGame = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let flag = false;
  let i = 0;
  while (flag === false && i < 3) {
    let correctAnswer = 'yes';
    const randomNumber = Math.floor(Math.random() * 10);

    const userAnswer = readlineSync.question(`'Question: ${randomNumber}' `);

    if (randomNumber <= 1) {
      correctAnswer = 'no';
    } else {
      for (let i = 2; i <= Math.sqrt(randomNumber); i++) {
        if (randomNumber % i === 0) {
          correctAnswer = 'no';
          break;
        }
      }
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

console.log(primeNumberGame());
