#!/usr/bin/env node

import readlineSync from 'readline-sync';

let name = '';
function greeting() {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}

function taskSolve(num1, num2, oper) {
  let result;
  switch (oper) {
    case '+':
      result = Number(num1) + Number(num2);
      console.log(`Question: ${num1} + ${num2}`);
      break;
    case '-':
      result = Number(num1) - Number(num2);
      console.log(`Question: ${num1} - ${num2}`);
      break;
    case '*':
      result = Number(num1) * Number(num2);
      console.log(`Question: ${num1} * ${num2}`);
      break;
    default:
      break;
  }

  const ansUser = readlineSync.question('Your answer: ');
  if (result === Number(ansUser)) {
    console.log('Correct!');
    return true;
  }
  console.log(
    `'${ansUser}' is wrong answer ;(. Correct answer was '${result}'.`,
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
