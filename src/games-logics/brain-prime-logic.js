#!/usr/bin/env node

import { run } from '../index.js';

const primeNumberGame = () => {
  const startText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const gameQuestionAnswer = () => {
    let correctAnswer = 'yes';
    const rangeOfRandom = 10;
    const randomNumber = Math.floor(Math.random() * rangeOfRandom);

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

    return [randomNumber, correctAnswer];
  };

  return run(startText, gameQuestionAnswer);
};

console.log(primeNumberGame());

export default primeNumberGame;
