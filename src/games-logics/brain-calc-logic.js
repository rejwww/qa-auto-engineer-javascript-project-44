#!/usr/bin/env node

import { run } from '../index.js';

const calculatorGame = () => {
  const startText = 'What is the result of the expression?';

  const gameQuestionAnswer = () => {
    let correctAnswer;
    const rangeOfRandom = 100;
    const randomNumber1 = Math.floor(Math.random() * rangeOfRandom);
    const randomNumber2 = Math.floor(Math.random() * rangeOfRandom);
    const arrMathSign = ['+', '-', '*'];

    const randomMathSign = Math.floor(Math.random() * arrMathSign.length);

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

    const question = `${randomNumber1} ${arrMathSign[randomMathSign]} ${randomNumber2}`;

    return [question, correctAnswer];
  };

  return run(startText, gameQuestionAnswer);
};

console.log(calculatorGame());

export default calculatorGame;
