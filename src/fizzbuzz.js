// TODO: Write your function in this file

// let fizzBuzz = (lower, upper) => {
//   const numsArr = [];
//   const newNumsArr = [];
//   for (let i = lower; i <= upper; i++) numsArr.push(i);
//   numsArr.map((num) => {
//     if (num % 15 === 0) num = 'FizzBuzz';
//     if (num % 5 === 0) num = 'Buzz';
//     if (num % 3 === 0) num = 'Fizz';
//     newNumsArr.push(num);
//   });
//   return newNumsArr;
// };


// const fizzBuzz = (lower, upper) => {
//   const newNumsArr = [];
//   for (let i = lower; i <= upper; i++) {
//     newNumsArr.push(i % 15 === 0 ? 'FizzBuzz' : i % 5 === 0 ? 'Buzz' : i % 3 === 0 ? 'Fizz' : i);
//   }
//   return newNumsArr;
// };

const divisors = [];
const fizzBuzz = (lower, upper, divisorOne,stringOne,divisorTwo,stringTwo) => {
  divisors[0] = {value: divisorOne, string: stringOne};
  divisors[1] = {value: divisorTwo, string: stringTwo};
  divisors[2] = {value: divisorOne * divisorTwo, string: stringOne + stringTwo};
  // console.log(divisors);
  const newNumsArr = [];
  for (let i = lower; i <= upper; i++) {
    newNumsArr.push(i % divisors[2].value === 0 ? divisors[2].string : i % divisors[1].value === 0 ? divisors[1].string : i % divisors[0].value === 0 ? divisors[0].string : i);
  }
  return newNumsArr;
};
console.log(fizzBuzz(1,30,3,'Fizzle',5,'Buzzle'));
// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz;
