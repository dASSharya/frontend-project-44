import readlineSync from 'readline-sync';

const greeting = 'Welcome to the Brain Games!';

const salution = () => {
  console.log(greeting);

  const nameQuestion = readlineSync.question('May I have your name? ');
  const userName = nameQuestion;

  console.log(`Hello, ${userName}!`);
};

export default salution;
