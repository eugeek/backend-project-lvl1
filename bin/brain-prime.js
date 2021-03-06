#!/usr/bin/env node
import readlineSync from 'readline-sync';

let name = '';
function greeting() {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function isNumberPrime(n) {
  let countDivs = 0;
  for (let d = 2; d < n; d += 1) {
    if (n % d === 0) countDivs += 1;
    if (countDivs >= 1) return false;
  }

  return true;
}

function round() {
  const number = getRandomInt(1, 100);
  console.log(`Question: ${number}`);
  const ansUser = readlineSync.question('Your answer: ');
  if (
    (isNumberPrime(number) && ansUser === 'yes')
    || (!isNumberPrime(number) && ansUser === 'no')
  ) {
    console.log('Correct!');
    return true;
  }
  console.log(
    `'${ansUser}' is wrong answer ;(. Correct answer was '${
      ansUser === 'yes' ? 'no' : 'yes'
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
    i += 1;
  }

  console.log(`Congratulations, ${name}!`);
}

greeting();
prime();
