'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number! 🎉';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 24;
*/
document.querySelector('.check').addEventListener('click',function(){
    console.log(document.querySelector('.guess').value);
    document.querySelector('.message').textContent = 'Correct number! 🎉';
})