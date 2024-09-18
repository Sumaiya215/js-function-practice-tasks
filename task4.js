function count_zero(binaryString){

let count=0;
for(let i= 0; i<binaryString.length;i++){
    if(binaryString[i] == '0'){
        count++;
    }
}
  return count;
}

const result = count_zero('000110101100')
console.log("Number of 0's are: ",result);

