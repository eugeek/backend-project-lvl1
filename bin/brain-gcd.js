#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greeting, name } from './src/cli.js';

function greatDiv(a, b) {
  for (let d = a; d >= 1; d -= 1) {
    if (a % d === 0 && b % d === 0) return d;
  }

  return '';
}

function task(a, b) {
  const div = greatDiv(a, b);
  console.log(`Question: ${a} ${b}`);
  const ansUser = readlineSync.question('Your answer: ');
  if (Number(div) === Number(ansUser)) {
    console.log('Correct!');
    return true;
  }
  console.log(
    `'${ansUser}' is wrong answer ;(. Correct answer was '${div}'.`,
  );
  return false;
}

function findDiv() {
  console.log('Find the greatest common divisor of given numbers.');

  if (!task(2, 20)) {
    console.log(`Let's try again, ${name}!`);
    return;
  }
  if (!task(3, 10)) {
    console.log(`Let's try again, ${name}!`);
    return;
  }
  if (!task(17, 51)) {
    console.log(`Let's try again, ${name}!`);
    return;
  }
  console.log(`Congratulations, ${name}!`);
}

greeting();
findDiv();
