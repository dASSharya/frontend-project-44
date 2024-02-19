import readlineSync from 'readline-sync';
import salution from '../../src/cli.js';
import getRandomNumber from '../helpers/getRandomNumber.js';
import getRandomOperator from '../helpers/getRandomOperator.js';

const calc = () => {
  const userName = salution();
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
	const randomNumber1 = +getRandomNumber();
	const randomNumber2 = +getRandomNumber();
	const randomOperator = getRandomOperator();
	console.log(`Question: ${randomNumber1} ${randomOperator} ${randomNumber2}`);

	let resultOfExpression;
    switch
    (randomOperator) {
    case '+':
        resultOfExpression = randomNumber1 + randomNumber2;
        break;
    case '-':
        resultOfExpression = randomNumber1 - randomNumber2;
        break;
    default:
        resultOfExpression = randomNumber1 * randomNumber2;
        break;
	}

	const responseQuestion = readlineSync.question('Your answer: ');
	const playersResponse = +responseQuestion;

	const correctAnswer = 'Correct!';
	const incorrectAnswer = `${playersResponse} is wrong answer ;(. Correct answer was ${resultOfExpression}.
Let's try again, ${userName}`;

	if (playersResponse === resultOfExpression) {
    console.log(correctAnswer);
	} else {
			console.log(incorrectAnswer);
			return;
	}
	}
console.log(`Congratulations, ${userName}!`);
};

export default calc;
