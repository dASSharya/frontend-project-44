import readlineSync from 'readline-sync';
import salution from '../cli.js';
import getRandomNumber from '../helpers/getRandomNumber.js';

const progression = () => {
  const userName = salution();
  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    
    let numberOfBeginning = getRandomNumber(0, 90);
    let stepLength = getRandomNumber(1, 10);
    let rate = [];
    let indexOfHidenNumber = getRandomNumber(1, 9);
    let symbolOfHiddenNumber = '..';
  
    for ( let i = 0; i < 10; i += 1) {
    numberOfBeginning += stepLength;
    rate.push(numberOfBeginning)
  }

  let hiddenNumber = rate[indexOfHidenNumber];
  rate[indexOfHidenNumber] = symbolOfHiddenNumber;

  console.log(`Question: ${rate.join(' ')}`)

  const responseQuestion = readlineSync.question('Your answer: ');
  const playersResponse = +responseQuestion;

  const correctAnswer = 'Correct!';
  const incorrectAnswer = `${playersResponse} is wrong answer ;(. Correct answer was ${hiddenNumber}. Let's try again, ${userName}`;

  if (playersResponse === hiddenNumber) {
    console.log(correctAnswer);
	} else {
			console.log(incorrectAnswer);
			return;
	}
}
	
console.log(`Congratulations, ${userName}!`);
} 

export default progression;
