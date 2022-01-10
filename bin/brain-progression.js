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

function createProgression() {
  const size = getRandomInt(5, 10);
  const arr = [];
  arr.push(getRandomInt(1, 35));
  const d = getRandomInt(1, 10);
  for (let i = 1; i < size; i += 1) {
    arr[i] = arr[i - 1] + d;
  }

  return arr;
}

function round() {
  const pr = createProgression();
  const iKey = getRandomInt(0, pr.length - 1);
  const key = pr[iKey];
  pr[iKey] = '..';
  console.log(`Question: ${pr.join(' ')}`);
  const ansUser = readlineSync.question('Your answer: ');
  if (Number(key) === Number(ansUser)) {
    console.log('Correct!');
    return true;
  }
  console.log(
    `'${ansUser}' is wrong answer ;(. Correct answer was '${Number(key)}'.`,
  );
  return false;
}

function progression() {
  console.log('What number is missing in the progression?');
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
progression();
