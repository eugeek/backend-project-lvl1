#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greeting, name } from './src/cli.js';

function taskSolve(num1, num2, z) {
  let str = '';
  str = `${String(num1)} ${z} ${String(num2)}`;

  console.log(`Question: ${str}`);
  const ansUser = readlineSync.question('Your answer: ');
  if (Number(eval(str)) === Number(ansUser)) {
    console.log('Correct!');
    return true;
  }
  console.log(
    `'${ansUser}' is wrong answer ;(. Correct answer was '${eval(str)}'.`,
  );
  console.log(`Let's try again, ${name}!`);
  return false;
}

function calculate() {
  console.log('What is the result of the expression?');

  if (!taskSolve(5, 4, '+')) {
    return;
  }
  if (!taskSolve(9, 2, '-')) {
    return;
  }
  if (!taskSolve(5, 3, '*')) {
    return;
  }

  console.log(`Congratulations, ${name}!`);
}

greeting();
calculate();
