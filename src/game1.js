import readlineSync from 'readline-sync';
import salution from './cli.js';

const game1 = () => {
  const userName = salution();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let questionCount = 0;

  for (let i = 0; i < 3; i += 1) {
    questionCount += 1;
    const randomNumber = Math.floor(Math.random() * 101);
    console.log(`Question: ${randomNumber}`);

    let parityTwo;
    if (randomNumber % 2 === 0) {
      parityTwo = 'yes';
    } else {
      parityTwo = 'no';
    }

    const responseQuestion = readlineSync.question('Your answer:');
    const playersResponse = responseQuestion;

    const correctAnswer = 'Correct!';
    const incorrectAnswer = `${playersResponse} is wrong answer ;(. Correct answer was ${parityTwo}. Let's try again, ${userName}`;

    if (playersResponse === parityTwo) {
      console.log(correctAnswer);
    } else {
      console.log(incorrectAnswer);
      break;
    }

    if (questionCount === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default game1;
