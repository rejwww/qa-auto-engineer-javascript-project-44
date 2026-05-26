#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {resultOfGame, resultOfRound } from '../../src/index.js'; 

const greatestCommonDivisor = () =>{
console.log('Find the greatest common divisor of given numbers.');

let flag = false;
let i = 0;

while((flag === false) && (i < 3)){

    let correctAnswer;
    let randomNumber1 = Math.floor(Math.random() * 100)
    let randomNumber2 = Math.floor(Math.random() * 100)

    const userAnswer = readlineSync.question(`'Question:' ${randomNumber1} , ${randomNumber2} `);

    
    let min = Math.min(randomNumber1,randomNumber2);
    let max = Math.max(randomNumber1,randomNumber2);

  
     while (min !== 0) {
        let remainder  = min;
        min = max % min;
        max = remainder;
    }
        correctAnswer = String(max);

    if (userAnswer === correctAnswer){
        console.log("Correct!");
        i++;
    } else{

        flag = true;
        console.log(resultOfRound(userAnswer, correctAnswer))
    }
    
    }
return resultOfGame(flag);
}

console.log(greatestCommonDivisor())