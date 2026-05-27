import readlineSync from 'readline-sync';
export let userName = '';

const helloPlayer = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  return `Hello, ${userName}`;
};

console.log(helloPlayer());

export default helloPlayer;
