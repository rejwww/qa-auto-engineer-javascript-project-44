#!/usr/bin/env node

import { run } from '../index.js';

const greatestCommonDivisor = () => {
  const startText = 'Find the greatest common divisor of given numbers.';

  const gameQuestionAnswer = () => {
    const rangeOfRandom = 100;
    const randomNumber1 = Math.floor(Math.random() * rangeOfRandom);
    const randomNumber2 = Math.floor(Math.random() * rangeOfRandom);

    let min = Math.min(randomNumber1, randomNumber2);
    let max = Math.max(randomNumber1, randomNumber2);

    while (min !== 0) {
      const remainder = min;
      min = max % min;
      max = remainder;
    }
    const correctAnswer = String(max);

    const question = `${randomNumber1} ${randomNumber2}`;

    return [question, correctAnswer];
  };

  return run(startText, gameQuestionAnswer);
};

console.log(greatestCommonDivisor());

export default greatestCommonDivisor;
