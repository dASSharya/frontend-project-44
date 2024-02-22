import readlineSync from 'readline-sync';
import salution from '../cli.js';
import getRandomNumber from '../helpers/getRandomNumber.js';

const progression = () => {
  const userName = salution();
  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    let numberOfBeginning = getRandomNumber(0, 90);
    const stepLength = getRandomNumber(1, 10);
    const rate = [];
    const indexOfHidenNumber = getRandomNumber(1, 9);
    const symbolOfHiddenNumber = '..';

    for (let j = 0; j < 10; j += 1) {
      numberOfBeginning += stepLength;
      rate.push(numberOfBeginning);
    }

    const hiddenNumber = rate[indexOfHidenNumber];
    rate[indexOfHidenNumber] = symbolOfHiddenNumber;

    console.log(`Question: ${rate.join(' ')}`);

    const responseQuestion = readlineSync.question('Your answer: ');
    const playersResponse = +responseQuestion;

    const correctAnswer = 'Correct!';
    const incorrectAnswer = `${playersResponse} is wrong answer ;(. Correct answer was ${hiddenNumber}. 
  Let's try again, ${userName}`;

    if (playersResponse === hiddenNumber) {
      console.log(correctAnswer);
    } else {
      console.log(incorrectAnswer);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default progression;
