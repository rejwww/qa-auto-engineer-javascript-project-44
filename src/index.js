import {userName} from './cli.js'; 


const resultOfGame = (flag) =>{

    let resultGame;

 if (flag === true){
    resultGame = `Let's try again, ${userName}!`
    } else {
    resultGame =  `Congratulations, ${userName}!`
    }

    return resultGame;
}


const resultOfRound = (userAnswer, correctAnswer) =>{
    
    let resultRound;

            resultRound = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`

        return resultRound;
}




export {resultOfGame, resultOfRound};