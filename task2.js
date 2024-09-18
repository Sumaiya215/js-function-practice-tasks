function operation(num){

    if(num%2 ==1 ){
        let multiply =num*2;
        return multiply;
    }
    if(num%2 == 0){
        let divide = num/2;
        return divide;
    }
}
const Result = operation(8);
console.log(Result);