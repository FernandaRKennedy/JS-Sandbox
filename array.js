// activity 
let monthlyProfitLabels = [ 'January: 5', 'February: -1', 'March: 12' ]
let monthList = document.querySelector('.month-list')

// for(let i = 0; i < monthlyProfitLabels.length; i++){
//     let label = monthlyProfitLabels[i]
//     let monthLi = document.createElement('li')
//     monthLi.textContent = label
//     monthList.append(monthLi)
// }
//rewrite the above loop using the forEach

monthlyProfitLabels.forEach(label => {
    let monthLi = document.createElement('li')
    monthLi.textContent = label
    monthList.append(monthLi)
})
    


// const people =[
//     {
//         name:'nanda',
//         location: 'atlanta',
//            age: '18'
//     },
//     {
//         name:'borey',
//         location: 'durham',
//         age: '25'
//     },
//     {
//         name:'athena',
//         location: 'alabama',
//         age: '8'
//     },
//     {name:'toby',
//     location: 'alabama',
//      age: '34'
//     }
// ]

// function test(){
// console.log('test')
// }
//  for(let i =0; i < people.length; i++){
//     const person = people  [i]
//     console.log('people')
//  }
// foreach, map, filter sprt, every, some, reduce 

//for each

// people.forEach((person)=> {
//     console.log(arr)
//     // if(person.age >= 18) console.lo (`${person.name} is an adult`)//dispaly the adukts
//     // console.log(person) // display the array
// })
// const doubledNumbers = []

// numbers.forEach(num =>{
//     doubledNumbers.push(num * 2) //preferable
// })

//map 
// const numbers =[ 1,4,8,6,5]

// const doubledNumbers = numbers.map(num => {
//     return num * 2
// })

// const doubledNumbers = numbers.map(num => num * 2) // this is the same than the top one preferable
// console.log(doubledNumbers)

//filter

// const adults = people.filter(person => {
//     if (person.age >= 18){
//         return person
//     }
// })

// const adults = people.filter(person => person.age >= 18) // same tham the top preferable
    
//  console.log(adults)
//  console.log(people)


//sort
// const numbers =[ 1,4,8,6,5]
// numbers.sort((a,b)=> a -b )
// console.log(numbers)








