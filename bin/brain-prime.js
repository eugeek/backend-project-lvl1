#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greeting, name } from './src/cli.js';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function isNumberPrime(n) {
  let countDivs = 0;
  for (let d = 2; d < n; d++) {
    if (n % d === 0) countDivs++;
    if (countDivs >= 1) return false;
  }

  if (countDivs === 0) return true;
}

function round() {
  const number = getRandomInt(1, 100);
  console.log(`Question: ${number}`);
  const ans_user = readlineSync.question('Your answer: ');
  if (
    (isNumberPrime(number) && ans_user === 'yes')
    || (!isNumberPrime(number) && ans_user === 'no')
  ) {
    console.log('Correct!');
    return true;
  }
  console.log(
    `'${ans_user}' is wrong answer ;(. Correct answer was '${
      ans_user === 'yes' ? 'no' : 'yes'
    }'.`,
  );
  return false;
}

function prime() {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let i = 0;
  while (i < 3) {
    if (!round()) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
    i++;
  }

  console.log(`Congratulations, ${name}!`);
}

greeting();
prime();
