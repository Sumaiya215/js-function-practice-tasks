function make_avg(numbers,size){
    let sum = 0, average =0;
    for(let i =0;i<numbers.length;i++){
        sum = sum + numbers[i];
}
   average =sum/size;
    return average;
}

const result = make_avg([2,5,7,3,8],5);
console.log("Average value: ",result);