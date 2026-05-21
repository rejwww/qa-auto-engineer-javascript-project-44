import readlineSync from 'readline-sync';

const  helloPlayer = () =>{
   console.log('Welcome to the Brain Games!') 

   const userName = readlineSync.question('May I have your name? ');

   return `Hello, ${userName}`
}

console.log(helloPlayer())

export default helloPlayer;




