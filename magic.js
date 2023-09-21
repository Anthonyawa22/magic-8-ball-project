let userName = 'anthony';
// define a variable called userName that is set to an empty string.
userName ?
console.log(`Hello, ${userName}!`) : console.log('Hello!');
//create a ternary expression that decides what to do if the user enters a name or not
let userQuestion = ' how will i get a new puppy?';
//Create a variable named userQuestion. The value of the variable should be a string that is the question the user wants to ask the Magic Eight Ball.
console.log(`${userName} - how will i get a new puppy?`);
//Write a console.log() for the userQuestion, stating what was asked. You can include the user’s name in the console.log() statement, if you wish!
let randomNumber = Math.floor(Math.random() * 8);
//Create another variable, and name it randomNumber. Set it equal to this expression, which uses two methods (Math.floor() and Math.random()) 
console.log(randomNumber);

let eightBall = '';
//Create one more variable named eightBall, and set it equal to an empty string

switch(randomNumber){
  case 0:
  eightBall = 'It is certain';
  break;
  case 1:
  eightBall = 'It is decidedly so';
  break;
  case 2:
  eightBall = 'Reply hazy try again';
  break;
  case 3:
  eightBall = 'Cannot predict now';
  break;
  case 4:
  eightBall = 'Do not count on it';
  break;
  case 5:
  eightBall = 'My sources say no';
  break;
  case 6:
  eightBall = 'Outlook not so good';
  break;
  case 7:
  eightBall = 'Signs point to yes';
  break;
  default:
  eightBall = 'invalid number';
  break;
}
//We need to create a control flow that takes in the randomNumber we made in step 5, and then assigns eightBall to a reply that a Magic Eight Ball would return using the switch statement.
console.log(`The Magic 8 Ball says, ${eightBall}
`);
//Write a console.log() to print the Magic Eight Ball’s answer, the value of the eightBall variable.