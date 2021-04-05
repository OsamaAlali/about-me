/* eslint-disable no-unused-vars */
'use strict';
let userName = prompt('whas\'s you name Mr');
console.log(userName);
alert('let us ask u five qusetion Mr.' + userName);
let game = prompt('do you like football Mr.' + userName, 'yes,y,no,n');
game = game.toLowerCase();
console.log(game);
let count=0;
switch (game) {
case 'yes':
case 'y':
  alert('me too i like it');
  game = prompt('do you like RealMadried');
  count++;
  break;
case 'no':
case 'n':
  alert('ohhhh');
  break;
default: { alert('pls select yes or no '); }
}
game = game.toLowerCase();
switch (game) {
case 'yes':
case 'y':
  game = prompt('dose team win in last 3 match?');
  count++;
  break;
case 'no':
case 'n':
  alert('thats bad');
  break;
}
game = game.toLowerCase();
switch (game) {
case 'yes':
case 'y':
  count++;
  alert('this team is great');
  game = prompt('do you like jordan team?');
  break;
case 'no':
case 'n':
  alert('for ur info i dont like football i like pubg  :P');
  break;
}
game=game.toLowerCase();
switch(game){
case'yes':
case'y':
  count++;
  game = prompt('do you like Fasaly team?');
  break;
case 'no':
case 'n':
  alert('ooooops');
  break;
}
game=game.toLowerCase();
switch(game)
{
case'yes':
case'y':
  count++;
  break;
case 'no':
case'n':
  alert ('oKKKKKKKK');
  break;
}
alert('thank you Mr.'+userName+'for visted us you score is '+count+'/5');
document.write('Thank you Mr.' + userName);
