{
  /** 7 kyu  Double Sort
   * Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.
Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.
Note that numbers written as strings are strings and must be sorted with the other strings.   */

  function dbSort(a) {
    return [
      ...a.filter(e => typeof e === 'number').sort((a, b) => a - b),
      ...a.filter(e => typeof e === 'string').sort(),
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
    return parseInt([...n.toString(2)].reverse().join(''), 2);
  }
  // console.log(reverseBits(417));
}
{
  /** 7 kyu  Holiday III - Fire on the boat  
   * Enjoying your holiday, you head out on a scuba diving trip!
Disaster!! The boat has caught fire!!
You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.    */

  const fireFight = s => s.replace(/\bFire\b/g, '~~');
  // console.log(fireFight('Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast' ))
}
