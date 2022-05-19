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

let fizzBuzz = (lower, upper) => {
  const newNumsArr = [];
  for (let i = lower; i <= upper; i++) {
    newNumsArr.push(i % 15 === 0 ? 'FizzBuzz' : i % 5 === 0 ? 'Buzz' : i % 3 === 0 ? 'Fizz' : i);
  }
  return newNumsArr;
};

// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz;
