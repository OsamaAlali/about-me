/* eslint-disable no-unused-vars */
'use strict';
let userName = prompt('whas\'s you name Mr');
console.log(userName);
alert('let us ask u five qusetion Mr.' + userName);

let game = prompt('do you think i like football Mr.' + userName, 'yes,y,no,n');
game = game.toLowerCase();
console.log(game);
let count = 0;
function question1(){ 
switch (game) {
case 'yes':
case 'y':
  alert('..ok go for next Q');

  count++;
  break;
case 'no':
case 'n':
  alert('ohhhh go for next Q');
  break;
default: { alert('pls select yes or no '); }
}
}
question1();

game = prompt('do you think i like RealMadried?');
game = game.toLowerCase();
function question2(){
switch (game) {
case 'yes':
case 'y':
  alert('..ok go for next Q');
  count++;
  break;
case 'no':
case 'n':
  alert('thats bad');
  break;
}
}
question2();

game = prompt('dose team win in last 3 match?');
game = game.toLowerCase();
function question3() {
switch (game) {
case 'yes':
case 'y':
  count++;
  alert('this team is great');

  break;
case 'no':
case 'n':
  alert('for ur info i dont like football i like ');
  break;
}
}
question3();
game = prompt('do you think i like jordan team?');
game = game.toLowerCase();
function question4() {
switch (game) {
case 'yes':
case 'y':
  count++;

  break;
case 'no':
case 'n':
  alert('ooooops');
  break;
}
}
question4();
game = prompt('do you think i like Fasaly team?');
game = game.toLowerCase();
switch (game) {
case 'yes':
case 'y':
  count++;
  alert('');
  break;
case 'no':
case 'n':
  alert('oKKKKKKKK');
  break;
}
alert('thank you Mr.' + userName + 'for visted us you score is ' + count + '/5');
document.write('Thank you Mr.' + userName);
let myAge = 31;
let ageInput = 0;
alert('let us play ');
for (let a = 0; a < 4; a++) {
  ageInput = prompt('guessing my Age');
  ageInput = parseInt(ageInput);
  console.log(ageInput);
  if (myAge === ageInput) {
    alert('thats Right how u guessing!! How !!');
    count++;
    break;
  } else if (ageInput > myAge) {
    alert('Too High');
    if (a === 3) {
      alert('MY Age is 31');
    }
  } else if (ageInput < myAge) {
    alert('Too Low');
    if (a === 3) {
      alert('MY Age is 31');
    }
  }

}//end forlop for 6qusetion
let myArray = ['tennis', 'football', 'pubg'];
console.log(myArray);
alert('guessing what\'s  Game i like');

for (let i = 0; i <= 5; i++) {
  let gameInput = prompt('guessing what\'s  Game i like its three guessing at least 1');
  gameInput = gameInput.toLowerCase();
  if (gameInput === myArray[0] || gameInput === myArray[1] || gameInput === myArray[2]) {
    count++;
    alert('yahh you right');
    break;
  } else if (i === 5) {
    alert('My faverites game is' + myArray);
  }

}//end forloop for 7 qusetion
alert('thank you Mr.' + userName + 'for visted us you score is ' + count + '/7');
