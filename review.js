// for each/ map, filter, sort
//foreach
const people =["nanda", "nick"];

//run a function on each item in an array 
people.forEach((person)=> {
    console.log(person);
});

//map 
//returns a new array populayed by some function run in the original array 
const nums = [1,3,5];
const doubledNums = nums.map((num)=>{
    return num*2;

});

//filter
//returns a new array 
const evenNums = nums.filter (num => num % 2 === 0);
console.log(evenNums)
