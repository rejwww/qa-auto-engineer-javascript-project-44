#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { resultOfGame, resultOfRound, arithmeticProgressionCalc } from '../../src/index.js';

const arithmeticProgressionGame = () => {
  console.log('What number is missing in the progression?');

  let flag = false;
  let i = 0;
  while (flag === false && i < 3) {
    const randomStart = Math.floor(Math.random() * 100);
    const randomStep = Math.floor(Math.random() * (11 - 1) + 1);
    const randomLenght = Math.floor(Math.random() * (11 - 5) + 5);

    const randomNumber = Math.floor(Math.random() * randomLenght);

    //вызов ф-ции
    const arrProgression = arithmeticProgressionCalc(randomStart, randomStep, randomLenght);

    const correctAnswer = arrProgression[randomNumber];
    arrProgression[randomNumber] = '..';

    const userAnswer = readlineSync.question(`Question: ${arrProgression.join(" ")} `);

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

console.log(arithmeticProgressionGame());
