import readlineSync from 'readline-sync';
import getRandomNumber from '../helpers/getRandomNumber.js';
import salution from '../cli.js';

const smallestCommonMultiplier = () => {
  const userName = salution();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    let randomNumber1 = getRandomNumber();
    let randomNumber2 = getRandomNumber();
    console.log(`Question: ${randomNumber1} ${randomNumber2}`);

    const responseQuestion = readlineSync.question('Your answer: ');
    const playersResponse = +responseQuestion;

    while (randomNumber1 !== 0 && randomNumber2 !== 0) {
      if (randomNumber1 > randomNumber2) {
        randomNumber1 %= randomNumber2;
      } else {
        randomNumber2 %= randomNumber1;
      }
    }
    const result = randomNumber1 + randomNumber2;

    const correctAnswer = 'Correct!';
    const incorrectAnswer = `${playersResponse} is wrong answer ;(. Correct answer was ${result}.
Let's try again, ${userName}`;

    if (result === playersResponse) {
      console.log(correctAnswer);
    } else {
      console.log(incorrectAnswer);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default smallestCommonMultiplier;
