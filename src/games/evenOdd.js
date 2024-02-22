import readlineSync from 'readline-sync';
import salution from '../cli.js';
import getRandomNumber from '../helpers/getRandomNumber.js';
import isParityTwo from '../helpers/isParityTwo.js';

const game1 = () => {
  const userName = salution();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}`);

    const parityTwo = isParityTwo(randomNumber);

    const responseQuestion = readlineSync.question('Your answer:');
    const playersResponse = responseQuestion;

    const correctAnswer = 'Correct!';
    const incorrectAnswer = `${playersResponse} is wrong answer ;(. Correct answer was ${parityTwo}. Let's try again, ${userName}!`;

    if (playersResponse === parityTwo) {
      console.log(correctAnswer);
    } else {
      console.log(incorrectAnswer);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default game1;
