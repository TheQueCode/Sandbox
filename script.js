// Print all even numbers from 0 – 10

function evenNums(num){
  for(let i = 0; i <= num; i+=2){
    console.log(i);
  }
}

// evenNums(10);
// evenNums(13);
// evenNums(6);

// Print a table containing multiplication tables

function tabelsMultis(num1, num2){
  for(let i = 1; i <= num1; i++){
    for(let j = 1; j <= num2; j++){
      console.log(`${i} * ${j} = ${i * j}`);
    }
  }
}

// tabelsMultis(10, 12);

// Create a length converter function - input in kilometers and return in miles

function kiloToMiles(kilos){
  return kilos * .621;
}

// console.log(kiloToMiles(13));

// Calculate the sum of numbers within an array

// different ways

const numbers = [1,2,3,4,5,6,7,8,9,10];

// for loop

function sumArr(array){
  let sum = 0;
  for(let i = 0; i < array.length; i++){
    sum += array[i]
  }
  return sum;
}

console.log(sumArr(numbers));

// for...of loop

function sumOfArray(array){
  let sum = 0;
  for (const num of array){
    sum += num;
  }
  return sum;
}

console.log(sumOfArray(numbers));

// .forEach

function sumForEach(array){
  let sum = 0;
  array.forEach(number => { sum += number; });
  return sum;
}

console.log(sumForEach(numbers));

// reduce

const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum);

// reduce with arrow function

const sumAgain = numbers.reduce((acc, cur) => acc + cur, 0);

console.log(sumAgain);

// Create a function that reverses an array

function reverse(array){
  console.log(array);
}

reverse(numbers);