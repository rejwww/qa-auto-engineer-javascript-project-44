#!/usr/bin/env node

import { run } from '../../src/index.js';

const checkingForParity = () => {
  const startText = 'Answer "yes" if the number is even, otherwise answer "no".';

  const gameQuestionAnswer = () => {
    let correctAnswer;
    const rangeOfRandom = 1000;
    const randomNumber = Math.floor(Math.random() * rangeOfRandom);

    if (randomNumber % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }

    return [randomNumber, correctAnswer];
  };

  return run(startText, gameQuestionAnswer);
};

console.log(checkingForParity());

export default checkingForParity;
