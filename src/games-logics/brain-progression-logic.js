#!/usr/bin/env node

import { run, arithmeticProgressionCalc } from '../index.js';

const arithmeticProgressionGame = () => {
  const startText = 'What number is missing in the progression?';

  const gameQuestionAnswer = () => {
    const rangeOfRandom = 100;
    const maxForRandomArr = 11;
    const minForRandomArrStep = 1;
    const minForRandomArrLenght = 5;
    const randomStart = Math.floor(Math.random() * rangeOfRandom);
    const randomStep = Math.floor(
      Math.random() * (maxForRandomArr - minForRandomArrStep) + minForRandomArrStep,
    );
    const randomLenght = Math.floor(
      Math.random() * (maxForRandomArr - minForRandomArrLenght) + minForRandomArrLenght,
    );

    const randomNumber = Math.floor(Math.random() * randomLenght);

    //вызов ф-ции
    const arrProgression = arithmeticProgressionCalc(randomStart, randomStep, randomLenght);

    const correctAnswer = arrProgression[randomNumber];
    arrProgression[randomNumber] = '..';

    const question = arrProgression.join(' ');
    return [question, correctAnswer];
  };

  return run(startText, gameQuestionAnswer);
};

console.log(arithmeticProgressionGame());

export default arithmeticProgressionGame;
