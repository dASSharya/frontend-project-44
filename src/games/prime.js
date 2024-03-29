import readlineSync from 'readline-sync';
import salution from '../cli.js';
import getRandomNumber from '../helpers/getRandomNumber.js';

const prime = () => {
  const userName = salution();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber(10, 500);
    console.log(`Qoustion: ${randomNumber}`);
    const isItAPrime = () => {
      for (let j = 2; j < randomNumber / 2; j += 1) {
        if (randomNumber % j === 0) {
          return false;
        }
      }
      return true;
    };
    const rightAnswer = isItAPrime(randomNumber) ? 'yes' : 'no';

    const responseQuestion = readlineSync.question('Your answer: ');
    const playersResponse = responseQuestion;

    const correctAnswer = 'Correct!';
    const incorrectAnswer = `${playersResponse} is wrong answer ;(. Correct answer was ${rightAnswer}. 
Let's try again, ${userName}`;
    if (playersResponse === rightAnswer) {
      console.log(correctAnswer);
    } else {
      console.log(incorrectAnswer);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default prime;
