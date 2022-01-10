#!/usr/bin/env node

import readlineSync from 'readline-sync';

import {greeting, name} from './src/cli.js';

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function evenGame() {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for(let i = 0; i < 3; i++){
        let number = Math.floor(getRandomArbitrary(1, 100));
        console.log(`Question: ${number}`);
        let ans_user = readlineSync.question('Your answer: ');
        if(number % 2 === 0 && ans_user === 'yes' || number % 2 !== 0 && ans_user === 'no'){
            console.log('Correct!');
        }
        else {
            console.log(`'${ans_user}' is wrong answer ;(. Correct answer was '${ans_user === 'yes' ? 'no' : 'yes'}'`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
}

greeting();
evenGame();