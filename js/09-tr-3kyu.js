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
  /**   7 kyu  Exclamation marks series #7: Remove words 
  Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.
  Examples  
  remove("Hi!") === ""
  remove("Hi! Hi!") === ""
  remove("Hi! Hi! Hi!") === ""
  remove("Hi Hi! Hi!") === "Hi"
  remove("Hi! !Hi Hi!") === ""
  remove("Hi! Hi!! Hi!") === "Hi!!"
  remove("Hi! !Hi! Hi!") === "!Hi!"        */

  // function remove(string) {
  //   return ((res) => (res.length ? res.join(" ") : ""))(
  //     string.split(" ").filter((e) => e.split("!").length !== 2)
  //   );
  // }

  const remove = (string) =>
    ((res) => (res.length ? res.join(" ") : ""))(
      string.split(" ").filter((e) => e.split("!").length !== 2)
    );

  // console.log(remove("Hi! !Hi! Hi!"));
}

{
  /** 8 kyu  Fun with ES6 Classes #1 - People, people, people
Fun with ES6 Classes #1 - People, people, people
Time for some OOP fun!

Define a class Person with the following properties:

A constructor that accepts 4 arguments: firstName/FirstName (defaults to "John" if not set), lastName/LastName (defaults to "Doe" if not set), age/Age (defaults to 0 if not set) and gender/Gender (defaults to "Male" if not set). These should be stored in this.firstName/this.FirstName, this.lastName/this.LastName, this.age/this.Age and this.gender/this.Gender respectively.
A method sayFullName/SayFullName that accepts no arguments and returns the full name (e.g. "John Doe")
A class/static method greetExtraTerrestrials/GreetExtraTerrestrials that accepts one parameter raceName and returns */

  class Person {
    static greetExtraTerrestrials(raceName) {
      return `Welcome to Planet Earth ${raceName}`;
    }

    constructor(
      firstName = "John",
      lastName = "Doe",
      age = 0,
      gender = "Male"
    ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
    }
    sayFullName() {
      return this.firstName + " " + this.lastName;
    }
  }

  const john = new Person();
  // console.log(john);
}

{
  /** 7 kyu  Two numbers are positive
  Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of the three integers are positive numbers (greater than zero), and False - otherwise.
  
  Examples:
  twoArePositive(2, 4, -3) == true
  twoArePositive(-4, 6, 8) == true
  twoArePositive(4, -6, 9) == true
  twoArePositive(-4, 6, 0) == false
  twoArePositive(4, 6, 10) == false
  twoArePositive(-14, -3, -4) == false */

  // function twoArePositive(a, b, c) {
  // return [a, b, c].filter((e) => e > 0).length === 2;
  // }

  // const twoArePositive = (a, b, c) =>
  // [a, b, c].filter((e) => e > 0).length === 2;

  const twoArePositive = (a, b, c) => (a > 0) + (b > 0) + (c > 0) === 2;

  console.log(twoArePositive(0, 1, 2));
}
