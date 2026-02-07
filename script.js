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

