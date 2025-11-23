function sumAll(...numbers){
    return numbers.reduce((sum,curr)=>sum+curr,0)
}
console.log(sumAll(1,2,3,4));
