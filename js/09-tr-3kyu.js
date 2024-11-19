{
  /** 7 kyu  Double Sort
   * Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.
Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.
Note that numbers written as strings are strings and must be sorted with the other strings.   */

  function dbSort(a) {
    return [
      ...a.filter((e) => typeof e === "number").sort((a, b) => a - b),
      ...a.filter((e) => typeof e === "string").sort(),
    ];
  }
  // console.log(dbSort(['Banana', 'Orange', 'Apple', 'Mango', 0, 2, 2]));
}
{
  /** 7 kyu  Reverse the bits in an integer
Write a function that reverses the bits in an integer.
For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.
You can assume that the number is not negative.            */

  function reverseBits(n) {
    return parseInt([...n.toString(2)].reverse().join(""), 2);
  }
  // console.log(reverseBits(417));
}
{
  /** 7 kyu  Holiday III - Fire on the boat  
   * Enjoying your holiday, you head out on a scuba diving trip!
Disaster!! The boat has caught fire!!
You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.    */

  // const fireFight = s => s.replace(/\bFire\b/g, '~~');
  // const fireFight = s => s.replace(/Fire/g, '~~');
  // const fireFight = s => s.replaceAll('Fire', '~~');
  const fireFight = (s) => s.split("Fire").join("~~");
  // console.log(fireFight('Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast'));
}
{
  /** 7kyu Object 
   * Give you a function animal, accept 1 parameter:obj like this:
{name:"dog",legs:4,color:"white"}
and return a string like this:
"This white dog has 4 legs."     */

  function animal(obj) {
    const { color, name, legs } = obj;
    return `This ${color} ${name} has ${legs} legs.`;
  }
  // console.log(animal({ name: 'dog', legs: 4, color: 'white' }));
}
{
  /** 7 kyu  Calculate Two People's Individual Ages 
   * Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age first) if those exist or null/None or {-1, -1} in C if:
sum < 0
difference < 0
Either of the calculated ages come out to be negative  */

  const getAges = (sum, difference) => {
    const yangest = (sum - difference) / 2;
    return sum < 0 || difference < 0 || yangest < 0
      ? null
      : [yangest + difference, yangest];
  };
  // console.log(getAges(25, 7));
}
{
  /** 7 kyu  Nickname Generator
   * Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.
If the 3rd letter is a consonant, return the first 3 letters.
nickname("Robert") //=> "Rob"
nickname("Kimberly") //=> "Kim"
nickname("Samantha") //=> "Sam"
If the 3rd letter is a vowel, return the first 4 letters.
nickname("Jeannie") //=> "Jean"
nickname("Douglas") //=> "Doug"
nickname("Gregory") //=> "Greg"
If the string is less than 4 characters, return "Error: Name too short".
Notes:
Vowels are "aeiou", so discount the letter "y".
Input will always be a string.
Input will always have the first letter capitalised and the rest lowercase (e.g. Sam).
The input can be modified   */

  // function nicknameGenerator(name) {
  //   return name.length < 4
  //     ? 'Error: Name too short'
  //     : 'aeiou'.includes(name[2])
  //     ? name.slice(0, 4)
  //     : name.slice(0, 3);
  // }
  // function nicknameGenerator(name) {
  //   return name.length < 4
  //     ? 'Error: Name too short'
  //     : /[aeiou]/.test(name[2])
  //     ? name.slice(0, 4)
  //     : name.slice(0, 3);
  // }
  function nicknameGenerator(name) {
    return name.length < 4
      ? "Error: Name too short"
      : "aeiou".indexOf(name[2]) + 1
      ? name.slice(0, 4)
      : name.slice(0, 3);
  }
  // console.log(nicknameGenerator('Simon'));
}

{
  /** 7 kyu  Convert Hash To An Array
  Convert a hash into an array. Nothing more, Nothing less.  
  {name: 'Jeremy', age: 24, role: 'Software Engineer'}
  should be converted into  
  [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]] */

  // function convertHashToArray(hash) {
  //   return Object.entries(hash);
  // }

  const convertHashToArray = (hash) => Object.entries(hash);

  // console.log(
  //   convertHashToArray({ name: 'Jeremy', age: 24, role: 'Software Engineer' }),
  // );
}

{
  /** 7 kyu  Last
  Find the last element of the given argument(s). If a single argument is passed and is a list/array or a string, return its last element. It is guaranteed that there will be at least one argument and that single-argument arrays/lists/strings will not be empty.
  
  Examples
  last(5)               ==> 5
  last([1, 2, 3, 4])    ==>  4
  last("xyz")           ==> "z"
  last(1, 2, 3, 4)      ==>  4
  last([1, 2], [3, 4])  ==>  [3, 4]
  last([[1, 2], [3, 4]])  ==>  [3, 4] */

  // function last(...args) {
  //   console.log(args);
  //   return args.length > 1
  //     ? args.slice(-1)[0]
  //     : args[0].length > 1
  //     ? args[0].slice(-1)[0]
  //     : args[0][0] ?? args[0];
  // }

  // const last = (...args) =>
  //   args.length > 1
  //     ? args.slice(-1)[0]
  //     : args[0].length > 1
  //     ? args[0].slice(-1)[0]
  //     : args[0][0] ?? args[0];

  const last = (a, ...args) =>
    args.length ? args.slice(-1)[0] : a.length > 1 ? a.slice(-1)[0] : a[0] ?? a;

  // console.log(last([7]));
}

{
  /**  
7 kyu  Multiply Word in String
    You are to write a function that takes a string as its first parameter. This string will be a string of words.
    You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.
    Once you have the located string you are finally going to multiply by it the third provided parameter, which will also be an integer. You are additionally required to add a hyphen in between each word.
Example
modifyMultiply ("This is a string", 3, 5)   */

  // function modifyMultiply (str,loc,num) {
  // return Array(num).fill(str.split(' ')[loc]).join('-')
  // }

  const modifyMultiply = (str, loc, num) =>
    Array(num).fill(str.split(" ")[loc]).join("-");

  // console.log(modifyMultiply("Is sloppiness in code caused by ignorance or apathy? I don't know and I don't care.",6 ,8))
}

{
  /** 
  7 kyu  Password maker
  One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.
    Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):
        instead of including i or I put the number 1 in the password;
      instead of including o or O put the number 0 in the password;
      instead of including s or S put the number 5 in the password.
    Examples:  
  "Give me liberty or give me death"  --> "Gml0gmd"
  "Keep Calm and Carry On"            --> "KCaC0"   */

  // function makePassword(phrase, s='oi___s') {
  //  return phrase.split(' ').map(e=> e.charAt()).map(e=>e= (s.includes(e.toLowerCase()) ? s.indexOf(e.toLowerCase()) : e)).join('')
  // }

  // const makePassword=(phrase, s='oi___s') => phrase.split(' ').map(e=> e.charAt()).map(e=>e= (s.includes(e.toLowerCase()) ? s.indexOf(e.toLowerCase()) : e)).join('')
  const makePassword = (phrase) =>
    phrase
      .split(" ")
      .map((e) => e.charAt())
      .join("")
      .replace(/o/gi, "0")
      .replace(/i/gi, "1")
      .replace(/s/gi, "5");

  // console.log(makePassword('Keep Calm and Carry On'))
}

{
  /** 7 kyu  last digits of a number
 Your job is to implement a function which returns the last D digits of an integer N as a list.
Special cases:

    If D > (the number of digits of N), return all the digits.
    If D <= 0, return an empty list.

Examples:

N = 1
D = 1
result = [1]

N = 1234
D = 2
result = [3, 4]

N = 637547
D = 6
result = [6, 3, 7, 5, 4, 7]   */

  const lastDigit = (n, d) =>
    // d <= 0 ? [] : [...(n + "").slice(-d)].map((e) => +e);
    d > 0 ? [...(n + "").slice(-d)].map(Number) : [];

  // console.log(lastDigit(34625647867585, 10));
}

{
  /**   7 kyu  Caffeine Script
  Complete the function which takes a non-zero integer as its argument.
  
  If the integer is divisible by 3, return the string "Java".
  
  If the integer is divisible by 3 and divisible by 4, return the string "Coffee"
  
  If one of the condition above is true and the integer is even, add "Script" to the end of the string.
  
  If none of the condition is true, return the string "mocha_missing!"
  Examples
  
  1   -->  "mocha_missing!"
  3   -->  "Java"
  6   -->  "JavaScript"
  12  -->  "CoffeeScript"   */

  // const caffeineBuzz = (n) => {
  //   if (!(n % 12)) {
  //     return "CoffeeScript";
  //   }
  //   if (!(n % 6)) {
  //     return "JavaScript";
  //   }
  //   if (!(n % 3)) {
  //     return "Java";
  //   }
  //   return "mocha_missing!";
  // };

  const caffeineBuzz = (n) =>
    !(n % 12)
      ? "CoffeeScript"
      : !(n % 6)
      ? "JavaScript"
      : !(n % 3)
      ? "Java"
      : "mocha_missing!";

  // console.log(caffeineBuzz(12));
}

{
  /** 7 kyu  Easy wallpaper
John wants to decorate the walls of a room with wallpaper. He wants a fool-proof method for getting it right.

John knows that the rectangular room has a length of l meters, a width of w meters, a height of h meters. The standard width of the rolls he wants to buy is 52 centimeters. The length of a roll is 10 meters. He bears in mind however, that it’s best to have an extra length of wallpaper handy in case of mistakes or miscalculations so he wants to buy a length 15% greater than the one he needs.

Last time he did these calculations he got a headache, so could you help John?
Task

Your function wallpaper(l, w, h) should return as a plain English word in lower case the number of rolls he must buy.
Example:

wallpaper(4.0, 3.5, 3.0) should return "ten"

wallpaper(0.0, 3.5, 3.0) should return "zero"
Notes:

    all rolls (even with incomplete width) are put edge to edge

    0 <= l, w, h (floating numbers); it can happens that w * h * l is zero

    the integer r (number of rolls) will always be less or equal to 20

    FORTH: the number of rolls will be a positive or null integer (not a plain English word; this number can be greater than 20)

    In Coffeescript, Javascript, Python, Ruby and Scala the English numbers are preloaded and can be accessed as:

    numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve","thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]

    For other languages it is not preloaded and you can instead copy the above list if you desire.    */
  const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
  ];

  const wallpaper = (l, w, h) =>
    !l | !w | !h ? "zero" : numbers[Math.ceil(((l + w) * 2.3 * h) / 5.2)];
  // console.log(wallpaper(0, 4.5, 3.29));
}

{
  /** 7 kyu  Training JS #19: Methods of String object--toUpperCase() toLowerCase() and replace()
   Coding in function alienLanguage, function accept 1 parameter:str. str is a sentence.

  We translate the sentence into an alien language according to the following rules:
  
  Each word in the sentence is separated by spaces. The last letter of each word in the sentence turns to lowercase, and the other letters are capitalized. Looks very strange? Because this is the form of alien language ;-)
  
  for example:
  
  alienLanguage("My name is John") should return "My NAMe Is JOHn"
  alienLanguage("this is an example") should return "THIs Is An EXAMPLe"
  alienLanguage("Hello World") should return "HELLo WORLd"
  
  A small hint: The first conversion of the entire string will make the code easier */

  const alienLanguage = (str) =>
    str.toUpperCase().replace(/\w\b/g, (e) => e.toLowerCase());
  // console.log(alienLanguage("My name is John"));
}

{
  /** 7 kyu  Cat Years, Dog Years (2)
  I have a cat and a dog which I got as kitten / puppy.

I forget when that was, but I do know their current ages as catYears and dogYears.

Find how long I have owned each of my pets and return as a list [ownedCat, ownedDog]

NOTES:

    Results are truncated whole numbers of "human" years

Cat Years

    15 cat years for first year
    +9 cat years for second year
    +4 cat years for each year after that

Dog Years

    15 dog years for first year
    +9 dog years for second year
    +5 dog years for each year after that    */

  // const ownedCatAndDog = function (catYears, dogYears) {
  //   const animal = (age, rate) => {
  //     if (age < 15) return 0;
  //     if (age < 24) return 1;
  //     return (2 + (age - 24) / rate) ^ 0;
  //   };
  //   return [animal(catYears, 4), animal(dogYears, 5)];
  // };

  // const animal = (age, rate) =>
  //   age < 15 ? 0 : age < 24 ? 1 : (2 + (age - 24) / rate) ^ 0;
  // const ownedCatAndDog = (catYears, dogYears) => [
  //   animal(catYears, 4),
  //   animal(dogYears, 5),
  // ];

  // const animal = (age, rate) =>
  //   age < 24 ? (age / 15) ^ 0 : (2 + (age - 24) / rate) ^ 0;
  // const ownedCatAndDog = (catYears, dogYears) => [
  //   animal(catYears, 4),
  //   animal(dogYears, 5),
  // ];

  const ownedCatAndDog = (...years) =>
    years.map((e, i) => (e < 24 ? (e / 15) ^ 0 : (2 + (e - 24) / (i + 4)) ^ 0));
  // console.log(ownedCatAndDog(56, 64));
}

{
  /** 
  7 kyu  Snail crawls up
  The snail crawls up the column. During the day it crawls up some distance. During the night she sleeps, so she slides down for some distance (less than crawls up during the day).
  
  Your function takes three arguments:
  
      The height of the column (meters)
      The distance that the snail crawls during the day (meters)
      The distance that the snail slides down during the night (meters)
  
  Calculate number of day when the snail will reach the top of the column.   test passed:53, failed:2*/

  const snail = (column, day, night) => Math.ceil(column / (day - night));
  // console.log(snail(10, 3, 2));
}

{
  /**   6 kyu  Autocomplete! Yay!
  It's time to create an autocomplete function! Yay!
  
  The autocomplete function will take in an input string and a dictionary array and return the values from 
  the dictionary that start with the input string. If there are more than 5 matches, restrict your output 
  to the first 5 results. If there are no matches, return an empty array.
  
  Example:
  
  autocomplete('ai', ['airplane','airport','apple','ball']) = ['airplane','airport']
  
  For this kata, the dictionary will always be a valid array of strings. Please return all results in the order
   given in the dictionary, even if they're not always alphabetical. The search should NOT be case sensitive, 
   but the case of the word should be preserved when it's returned.
  
  For example, "Apple" and "airport" would both return for an input of 'a'. However, they should return as 
  "Apple" and "airport" in their original cases.
  
  Important note:
  
  Any input that is NOT a letter should be treated as if it is not there. For example, an input of "$%^" should
   be treated as "" and an input of "ab*&1cd" should be treated as "abcd".  */

  const autocomplete = (input, dictionary) =>
    dictionary.filter((e) => RegExp(input).test(e.replace(/[^a-z]/gi, "")));
  // console.log(autocomplete("ai", ["airplane", "airport", "apple", "ball"]));
}
{
  /** 6 kyu  Sum of Digits / Digital Root
Digital root is the recursive sum of all the digits in a number.
Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2   */

  // const digitalRoot = (n) => {
  //   if (("" + n).length < 2) return n;
  //   return digitalRoot(
  //     (n = (n + "").split("").reduce((sum, e) => sum + +e, 0))
  //   );
  // };

  // const digitalRoot = (n) =>
  //   ("" + n).length < 2
  //     ? n
  //     : digitalRoot((n = (n + "").split("").reduce((sum, e) => sum + +e, 0)));

  const digitalRoot = (n) =>
    n <= 9
      ? n
      : digitalRoot((n = (n + "").split("").reduce((sum, e) => sum + +e, 0)));

  console.log(digitalRoot(356));
}
