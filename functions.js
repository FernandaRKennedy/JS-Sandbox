// //function declaration 
// function greeting (){
//     console.log('hello')
// }
// greeting() //invoking 

// //function expression  not so used 

// const greeting2 = function(){
//     console.log('helo')
// }

// greeting2() //invoking 


// //arrow function   can use 'this'
// const greeting3 = () => {
//     console.log ('hello')
// }

// greeting3() //invoking 



const people =[
        {
            name:'nanda',
            location: 'atlanta'
        },
        {
            name:'borey',
            location: 'durham'
        },
        {
            name:'athena',
            location: 'alabama'
        }
    ]
//paraments and arguments 
function greating (name, location) {
// strings "" '' ``
    console.log(`hello my name is  ${name} and I live in ${location}`)
}

for (let i = 0; i < people.length; i++){
    const person = people[i]
    greating(person.name, person.location)
}



// greating('nick', 'atlanta') //ivoking 
// greating('nick')// if dont pass the location it will be undefined 

// parametes is just a variable( that expact name or location) called parementer when you defined a function 

//function output 
  function add(num1, num2){
    return num1 + num2 //returm helps to reuse the code  returns needs to be in the end of the code, because as soon youinput ot the code will stop to run 
  }

  const sum = add(10,15)
//   console.log(sum)
  const newSum = add(sum,10) //reusing sum
//   console.log(newSum)


  function isEven(num){
    if(num % 2 === 0){ // this code can be used only return num % 2 === 0 and the code will work perfct 
        return true
    }else{
        return false
    }
  }
//    console.log(isEven(2))

// lloh "hi" three times. Only write "console.log "once
function sayHi(){
console.log('hi')
}
sayHi()
sayHi()
sayHi()



