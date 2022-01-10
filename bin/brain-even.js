#!/usr/bin/env node

import readlineSync from 'readline-sync';

let name = '';
function greeting() {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function evenGame() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(getRandomArbitrary(1, 100));
    console.log(`Question: ${number}`);
    const ansUser = readlineSync.question('Your answer: ');
    if (
      (number % 2 === 0 && ansUser === 'yes')
      || (number % 2 !== 0 && ansUser === 'no')
    ) {
      console.log('Correct!');
    } else {
      console.log(
        `'${ansUser}' is wrong answer ;(. Correct answer was '${
          ansUser === 'yes' ? 'no' : 'yes'
        }'`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

greeting();
evenGame();
