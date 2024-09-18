function odd_even(num){
  if(num%2 == 0){
    return "Even";
  }
  else
    return "Odd";
}

const output = odd_even(11);
console.log(output);