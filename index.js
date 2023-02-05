
///debugging: 



/*
Welcome to debugging! This to help you get used to finding errors. It is also to test your knowledge of javascript.

Some of the attempted solutions might be different than the approach you are used to. That's okay! Do your best to understand the attempt, and make changes that will create working code.

All the inputs are correct. Any tests given will also be working properly. Focus your attention on understanding the prompt and the solution code.

Before starting, it is recommended to read the debugging guide and debugging loop tips. Refer back to them throughout your practice.

To solve each prompt, you'll need to first uncomment the code. The first one is uncommented for you.
*/ 



//////General debugging guide:
/*
Step 1) understand the prompt
Step 2) Read through code, write pseudo code noting strange/seemingly errant code
step3) Understand the intention behind the code. It might be wrong, but don't erase and start over!
step 4) make changes
step 5) Still getting strange results? consider console.log.
  ----with console.log, when you don't now where the error is coming from, create a range! Find where the code is working, and then where it stops working. That will help narrow down where the problem is.
*/


//////tips for debugging loops:
/*
  The process for loops is similar to above, but use these extra tips:
  1) log both array/string value (if available) and index
  //example:
    //log
    var arr1 = [1,2,3];
    for (var i = 0; i < arr1.length; i ++) {
      console.log('val:', arr1[i], 'ind:', i);
    }
  2) understand what the index should be for what shown value
  3) compare logged value/index to your understanding of input and output
  4) use ranges (see step 5 above)
  5) makes sure your loop is iterating the proper number of times
*/ 


//-------------------------------

//basic intro:

/**before you begin 



//You might fly through these, or you might uncover a concept you were unaware of not knowing. That's equally as important, so don't worry if you get stuck!

//Again, DON'T erase the code and start over! The goal is not to solve the problem, it's to fix the code, which means debugging.

//These will grow in difficulty towards intermediate and cover a range of topics.

//Don't forget to uncomment the console.logs beneath each prompt.

//Let's get our feet wet! 

*/


//***basic 1 ****

//should return a name and the word 'hello' seperated by a comma and a space

function concatMe(name) {
    var message = name + ', hello';
    return message;
  }

  var person = 'Josh'
  //console.log('basic1: ', concatMe(person)); //=> 'Josh, hello'





//-------------------------------------


//***basic 2 ****

//given a string, should return the rest of the string from the where the character is first found

function restOfStr(str, char) {
  var indexOf = char;
  var restOfStr = str.slice(str.indexOf(indexOf));
  return restOfStr;
}

var str1 = 'hello';
var char1 = 'e';

//console.log('basic2: ', restOfStr(str1, char1)); //==> 'ello' 




//--------------------------------------------


//***basic 3 ****
//should replace the first letter of str with char

function replaceChar(str, char) {
  var res = char + str.slice(1);
  //res[0] = char;
  return res;
}

var testStr = 'jellow';
var testChar = 'm';

//console.log('basic3: ', replaceChar(testStr, testChar)); // ==> 'mellow'




//----------------------------------------


//***basic 4 ****
//should combine the second part of str1 from index on to the beginning of str2 up to and including the index


function combineStr(str1, str2, index) {
  var beginning = str1.slice(index);
  var end = str2.slice(0, index + 1);
  return beginning + end;    
}

//console.log('basic4a: ', combineStr('telemed', 'icinemedia', 4)); //==> 'medicine'

//console.log('basic4b: ', combineStr('sisgeogr', 'aphyhobb', 3 )); //=> 'geography'




//----------------------------


//***basic 5 ****


//**note: this one has not been uncommented for you


// Create a function that takes a string and returns a string in which each character is repeated once.

// Examples
// doubleChar("String") ➞ "SSttrriinngg"

// doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"

// doubleChar("1234!_ ") ➞ "11223344!!__  "
// Notes
// All test cases contain valid strings. Don't worry about spaces, special characters or numbers. They're all considered valid characters.


function doubleChar(str) {
  var answer = '';
  for(var i = 0; i < str.length; i ++){
    answer += str[i];
    answer += str[i];
  }
  return answer;
}

//console.log(doubleChar("Hello World!")); //==> HHeelllloo  WWoorrlldd!!"





//----------------------------------------

//***basic 6 ****

//add the key and value to the object as a new property. If the key already exists, don't change the value.

//**note: this function has an assertObj function. It works fine. Below that, you will find actual and expected.


var testObj1 = {
  a: 'bee',
  c: 'deli',
  f: 'guard',
}

var testObj2 = {
  a: 'bee',
  c: 'deli',
  f: 'guard',
}


function addProperty(obj, key, val) {
  if (obj[key] === undefined) {
    obj[key] = val;
  }
  console.log('Given Key:', key);
  console.log(obj);
  return obj;
}

//assertObj: this works! Don't debug the assert function (all assert functions will work properly)

function assertObj(actual, expected) {
  var length = Object.keys(actual).length === Object.keys(expected).length;
  if (length === false) {
    return 'failed';
  }
  for (var key in actual) {
    if (actual[key] !== expected[key]) {
      return 'failed'
    }
  }
  return 'passed';
}

//var actual1 = addProperty(testObj1, 'm', 'night');
//var expected1 = { a: 'bee', c: 'deli', f: 'guard', m: 'night'};

//var actual2 = addProperty(testObj2, 'f', 'gorilla');
//var expected2 = { a: 'bee', c: 'deli', f: 'guard'};

//console.log('basic 6a: ', assertObj(actual1, expected1)); 
//console.log('basic6b:', assertObj(actual2, expected2)); 



////---------------------------------------

//***basic 7****

//findIndex
//should return the index of the array where the given key exists as a property


var accessArr = [
  {key1: 'Hello'},
  {key2: 'Thoughts'},
  {weird: 'these clothes'},
  {time: 'get a watch'},
];


function findIndex(arr, key){
  var index = 0;
  for (var i = 0; i < arr.length; i ++) {  //  0 < 4; i++
    if (arr[i][key]) {
      index = i;
      break;
    }
    console.log('Index:', index);
  }
  return index;
}

//console.log('basic 7: ', findIndex(accessArr, 'weird')); //==> 2






//---------------------------------------------------

//***basic 8****

//findValues
//given an object and an array of all the object keys, return a string of every other value concatenated togther 

var objOfStr = {
  key1: 'My ',
  key2: 'You ',
  key3: 'dog ',
  key4: 'are ',
  key5: 'loves ',
  key6: 'a ',
  key7: 'bones.',
  key8: 'wonderful person.',
}

var arrOfKeys1 = ['key1', 'key2', 'key3', 'key4', 'key5', 'key6', 'key7', 'key8'];
var arrOfKeys2 = ['key2', 'key1', 'key4', 'key3', 'key6', 'key5', 'key8', 'key7'];

function findValues(obj, arr) {
  var str = '';
  for (var i = 0; i < arr.length; i += 2) {
    str += obj[arr[i]];
  }
  return str;
}

//console.log('basic 8a: ', findValues(objOfStr, arrOfKeys1)); //==> 'My dog loves bones.'
//console.log('basic 8b: ', findValues(objOfStr, arrOfKeys2)); //==> 'You are a wonderful person.'

//console.log('basic 8: ', )




//---------------------------------------------------

//***basic 9****

//indexes
//Given an array of words and a letter, should return an array of the indexes where the char was found in each word. If the character doesn't exist in the word, should add 'none' to the array 

////****notice: uncomment below te index function to test 

var wordArr = [
  'aim',
  'tail',
  'series',
  'kitten',
  'fruit',
  'paper',
]

function indexes(arr, char) {
  var indexOfChar = [];
  console.log('Char:', char);
  for (var i = 0; i < arr.length; i ++) {
    var ind = arr[i].indexOf(char);
    if (ind !== -1) {
      indexOfChar.push(ind)
    } else {
      indexOfChar.push('none');
    }
  }
  console.log(indexOfChar);
  return indexOfChar;
}


//actualInd1 = indexes(wordArr, 'a');
//expectedInd1 = [0, 1, 'none', 'none', 'none', 1];

//actualInd2 = indexes(wordArr, 'e');
//expectedInd2 = ['none', 'none', 1, 4, 'none', 3];


//console.log('basic 9a: ', assertArrEquals(actualInd1, expectedInd1));
//console.log('basic9b: ', assertArrEquals(actualInd2, expectedInd2));


function assertArrEquals(actual, expected) {
  if (actual.length !== expected.length) {
    return 'failed';
  }
  for (var i = 0; i < actual.length; i ++) {
    if (actual[i] !== expected[i]) {
      return 'failed';
    }
  }
  return 'passed';
}


//-----------------------------------------




/////////////////////////////////////////////


////******Intermediate:********

/*
Well done! You've made it into the intermediate problems, and should be getting used to reading and modifying code that is not yours. Exciting stuff!

The length and difficulty will rise steeply from here on out. Once we get to the end of intermediate, we will be into some quite difficult problems!

Debugging at this level will give us a solid foundaton for debugging our own code in real life.

Pay attention to your process! It's recommended you take another look at the debugging guide/tips given at the beginning. Work on getting better at locating errors, and understanding the intent behind code. 

Last time we'll say this (we swear!!!), but DON'T erase the code and start over! Seriously. If we erase and solve from scratch, we won't improve our debugging skills.

You got this!
*/

//---------------------------------------


///Intermediate 1) 



//Odd Up, Even Down — N Times
// Create a function that performs an even-odd transform to an array, n times. Each even-odd transformation:

// Adds two (+2) to each odd integer.
// Subtracts two (-2) to each even integer.
// Examples
// evenOddTransform([3, 4, 9], 3) ➞ [9, -2, 15]
// // Since [3, 4, 9] => [5, 2, 11] => [7, 0, 13] => [9, -2, 15]

// evenOddTransform([0, 0, 0], 10) ➞ [-20, -20, -20]

// evenOddTransform([1, 2, 3], 1) ➞ [3, 0, 5]
// Notes

/******info break: 
 '!' is called the 'bang operator' and works on booleans and truthy/falsy values.
if you don't know the concept, you can find information on MDN. It's very handy, and properly used makes your code look nifty. Plus, it'll get used often from here.
*/

function evenOddTransform(arr, n) {
	for (var i = 0; i < arr.length; i ++) {  //  outer loop index
		for (var y = 0; y < n; y ++) {  //  inner loop nth times
      //console.log(arr[i]);
			if (!(arr[i] % 2)) {  //  if even -= 2
				arr[i] -= 2;
			} 
      else {  //  if odd += 2
				arr[i] += 2;
			}
		}
	}
	return arr;
}

//console.log('evendOddTransform1: ', evenOddTransform([0, 0, 0], 10)); //==> [-20, -20, -20]
//console.log('evenOddTransform2: ', evenOddTransform([1, 2, 3], 1)); //==> [3, 0, 5]





//--------------------------

///Intermediate 2) 

//Remove Middle Strings 
//Input is a string of odd or even length. If it has 4 or more characters and is even, return a new string with the middle two characters removed.  Else, return 'invalid string'. Characters will never repeat.


function removeMiddle(str) {

  if (str.length % 2 !== 0 || str.length < 4) {  //  if str length is NOT divisible by 2
    return 'invalid input'
  }
//angels
  var first = (str.length)/2 - 1;
  //console.log(first);
  var second = str.length/2;
  //console.log(second);
  var resStr = '';

  for  (var i = 0; i < str.length; i ++) {
    if (i !== first && i !== second) {
      console.log('str[i]', str[i], i)
      resStr += str[i];
    }
  }

  return resStr;
}

//console.log('intermediate 1a: ', removeMiddle('angels')); // ==> 'anls';
//console.log('intermediate 1b:', removeMiddle('hotel')); //==> 'invalid input'
//console.log('intermediate 1c: ', removeMiddle('at')); //  ==> 'invalid input'




//----------------------------------

//****Stop Here */

//*******The below problems have been deprecated */










///////////////////////////////////////

////*******Advanced Problem Set********

/*
Welcome to the advanced problem set! You are almost to the end.

By now, you should have seen a variety of situations requiring you to log, run through the example of your loops, create a range, and overall develope a keen eye for javascript mishaps.

In this section, we will continue the enterprise of becoming debugging experts.

These problems will require more introspection into what is being asked in the prompt, and really challenge you to think about the intent behind the code. It will be very likely that this code is completely different than how you yourself would solve the problem. None the less, our job remains to fix the bugs, not start from scratch.

Good luck on these last few! 
*/


//---------------------------------------




// //*****Advanced 1)****

// //Skipping Stones Contest
// /*
//   When you skip stones, the stones either skip or sink. 
//   When they skip, we give them a count starting from 1.
//   When the sink, we call 'plop'
//   In this problem, there are two stones, 'stone1' and 'stone2'. 
//   Given an array of objects that counts skips of both stones, return an array of which stone went the farthest, and how many skips it had.

//   For example: [{stone1: 1}, {stone2: 1}, {stone1: 'plop' }, {stone2: 2}, {stone2: 'plop'}];==> ['stone2', 2]

//   If the stones never skips, return tie with 0.
//   In all other cases, there will be a winner.
//  */

// //tip: the answer is not another loop. Don't add another loop. 

// var stoneSkips = [{stone1: 1}, {stone2: 1}, {stone1: 'plop' }, {stone2: 2}, {stone2: 'plop'}];



// var stoneSkips2 = [{stone1:'plop'}, {stone2:'plop'}];

// var stoneSkips3 =  [{stone1: 1}, {stone2: 1}, {stone2: 2}, {stone2: 'plop'},{stone1: 2}, {stone1: 3}, {stone1: 'plop'}];

// function skippingStones(arr) {

//   if (arr.length < 2) {
//     return ['tie', 0];
//   }

//   var countSkips = 0;
//   var stone = 'stone1';

//   for (var i = 0; i < arr.length; i ++) {
//     if (arr[i].stone1 && arr[i].stone1 === 'plop') {
//       stone = 'stone1';
//       countSkips = arr[i].stone1;
//     } else if (arr[i].stone2 && arr[i].stone2 === 'plop') {
//       stone = 'stone2';
//       countSkips = arr[i].stone2;
//     }
//   }
  
//   return [stone, countSkips];
// }


// var actualStones = skippingStones(stoneSkips);
// var expectedStones = ['stone2', 2];

// var actualStones2 = skippingStones(stoneSkips2);
// var expectedStones2 = ['tie', 0];

// var actualStones3 = skippingStones(stoneSkips3);
// var expectedStones3 = ['stone1', 3];

// //*The assert function works! Don't need to debug it */
// var assertStones = function (actual, expected) {
//   return JSON.stringify(actual) === JSON.stringify(expected);
// }

// // console.log('intermediat 2a: ', assertStones(actualStones, expectedStones));

// // console.log('intermediat 2b: ', assertStones(actualStones2, expectedStones2));

// // console.log('intermediate 2c: ', assertStones(actualStones3, expectedStones3))


// //----------------------------


// //*****Advanced 2)****


// //1)Boomerang

// // A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.

// // Some boomerang examples: [3, 7, 3], [1, -1, 1], [5, 6, 5]

// // Create a function that returns the total number of boomerangs in an array.

// // To illustrate:

// // [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
// // // 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]
// // Be aware that boomerangs can overlap, like so:

// // [1, 7, 1, 7, 1, 7, 1]
// // // 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]
// // Examples
// // countBoomerangs([9, 5, 9, 5, 1, 1, 1]) ➞ 2

// // countBoomerangs([5, 6, 6, 7, 6, 3, 9]) ➞ 1

// // countBoomerangs([4, 4, 4, 9, 9, 9, 9]) ➞ 0

// function countBoomerangs(arr) {
// 	let count;
// 	for (let i = 0; i < arr.length ; i +=2) {
// 		if (arr[i] = arr[i + 2] && arr[i + 1] !== arr[i]) {
// 			count ++;
// 		}
// 	}
// 	return count;
// }

// // var assertEqual = function(actual, expected) {
// //   if(actual === expected) {
// //     return 'passed';
// //   } else {
// //     return 'failed';
// //   }
// // }

// // var actual1 = countBoomerangs([9, 5, 9, 5, 1, 1, 1]);
// // var expected1 = 2;

// // var actual2 = countBoomerangs([5, 6, 6, 7, 6, 3, 9]);
// // var expected2 = 1;

// // console.log('assert1: ', assertEqual(actual1, expected1));
// // console.log('assert2: ', assertEqual(actual2, expected2));

// //-------------------------

// //*****Advanced 3)****



// //Who's The Oldest?


// // Given an object containing the names and ages of a group of people, return the name of the  person.


// // Notes
// // All ages will be different.

// function oldest(people) {
// 	var oldest;
// 	for (var key in people) {
// 		if (oldest === undefined) {
// 			oldest = key; 
// 		} else {
// 			if ( people < people[key]) {
// 				 oldest = key;
// 			}
// 		}
// 	}
// 	return oldest;
// }

// var ex1 = {
//   Emma: 71,
//   Jack: 45,
//   Amy: 15,
//   Ben: 29
// };  // ➞ "Emma"

// var ex2 = {
//   Max: 9,
//   Josh: 13,
//   Sam: 48,
//   Anne: 33
// } // ➞ "Sam"


// // //////assertFunction
// var assertOldest = function(actual, expected) {
//   if(actual === expected) {
//     return 'passed';
//   } else {
//     return 'failed';
//   }
// }

// // ///////running the tests
// // console.log('assertOldest1: ', assertOldest(oldest({
// //   Emma: 71,
// //   Jack: 45,
// //   Amy: 15,
// //   Ben: 29,
// // }), 'Emma'));

// // console.log('assertOldest1: ', assertOldest(oldest({
// //   Max: 9,
// //   Josh: 13,
// //   Sam: 48,
// //   Anne: 33,
// // }), 'Sam'));


// Complete!