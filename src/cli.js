import readlineSync from 'readline-sync';

const greeting = 'Welcome to the Brain Games!';
let userName;

const salution = () => {
  console.log(greeting);

  const nameQuestion = readlineSync.question('May I have your name? ');
  userName = nameQuestion;

  console.log(`Hello, ${userName}!`);
  return userName;
};

export default salution;
