
//////////////////PROBLEM 1////////////////////
/*
  Create a function called 'sum' that takes in two parameters, 'num1' and 'num2'. 
  The function should return the sum of the two parameters.
*/

//CODE HERE

function sum(num1, num2) {
   console.log(num1 + num2);
}

sum(3, 3);


//////////////////PROBLEM 2////////////////////
/*
  Create a function called 'greaterThanFive' that takes in a single parameter called 'number'. 
  Check to see if 'number' is greater than 5.
  If it is, return a true boolean. 
  If it's not, return a false boolean.
*/

//CODE HERE

function greaterThan5(number) {
  if(number > 5) {
    console.log(true)
  } else {
    console.log(false)
  }
}

greaterThan5(10);

//////////////////PROBLEM 3////////////////////
/*
  Create a function called 'findZWords' that takes in one parameter, 'word'. 
  Your function should check to see if the name begins with the letter "Z"
  If the name does begin with Z, return the string: 'the name begins with Z'. 
  If the name does not begin with Z, return the string: 'the name does not begin with Z'.
*/

//CODE HERE

function findZWords(word) {
  if(word[0] === 'z') {
    console.log('the name begins with Z');
  } else {
    console.log('the name does not begin with Z')
  }
}

findZWords('zoo');



//////////////////PROBLEM 4////////////////////
/*
  Create a function called 'iLove' that takes in two string parameters, 'name' and 'love'. 
  Have the function take the two parameters and return a string that says 
  "NAMEPARAM loves LOVEPARAM" with the appropriate parameters in the string. e.g. "Joseph loves music"
*/

//CODE HERE


function iLove(name, love) {
  console.log(`${name} loves ${love}!`)
}

iLove('Justin', 'juice');