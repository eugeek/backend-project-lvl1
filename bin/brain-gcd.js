#!/usr/bin/env node
import {greeting, name} from './src/cli.js';
import readlineSync from 'readline-sync';

function greatDiv(a, b){
    for(let d = a; d >= 1; d--){
        if(a % d === 0 && b % d === 0) return d;
    }
}

function task(a, b){
    let div = greatDiv(a, b);
    console.log(`Question: ${a} ${b}`);
    const ans_user = readlineSync.question('Your answer: ');
    if(Number(div) === Number(ans_user)){
        console.log('Correct!');
        return true;
    }
    else{
        console.log(`'${ans_user}' is wrong answer ;(. Correct answer was '${div}'.`);
        return false;
    }
}

function bad(){

}

function findDiv(){
    console.log('Find the greatest common divisor of given numbers.');

    if(!task(2, 20)) {
        console.log(`Let's try again, ${name}!`);
        return;
    }
    if(!task(3, 10)) {
        console.log(`Let's try again, ${name}!`);
        return;
    }
    if(!task(17, 51)) {
        console.log(`Let's try again, ${name}!`);
        return;
    }
    console.log(`Congratulations, ${name}!`);
}

greeting();
findDiv();