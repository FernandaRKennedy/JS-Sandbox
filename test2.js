// let selectedMonths = [ 
//     { name: 'January', revenue: 10, expenses: 5, quarter: 1 }, 
//     { name: 'February', revenue: 7, expenses: 8, quarter: 1 }, 
//     { name: 'March', revenue: 15, expenses: 3, quarter: 1 } 
// ]

// let monthlyProfitLabels = []//label
// for(let i = 0; i < selectedMonths.length; i++){//loop
//     let month = selectedMonths[i]//creat label
//     let label = `${month.name}: ${month.revenue - month.expenses}`
//     monthlyProfitLabels.push(label)
// }

// rewrite the above loop using map
// let monthlyProfitLabels = selectedMonths.map(month => `${month.name}: ${month.revenue - month.expenses}`)

// console.log(monthlyProfitLabels)



// let allMonths = [ 
//     { name: 'January', revenue: 10, expenses: 5, quarter: 1 }, 
//     { name: 'February', revenue: 7, expenses: 8, quarter: 1 }, 
//     { name: 'March', revenue: 15, expenses: 3, quarter: 1 } ,
//     { name: 'April', revenue: 20, expenses: 18, quarter: 2 } ,
//     { name: 'May', revenue: 25, expenses: 17, quarter: 2 } ,
//     { name: 'June', revenue: 19, expenses: 18, quarter: 2 },
//     { name: 'July', revenue: 20, expenses: 20, quarter: 3 } ,
//     { name: 'August', revenue: 19, expenses: 20, quarter: 3 },
//     { name: 'September', revenue: 21, expenses: 23, quarter: 3 },
//     { name: 'October', revenue: 21, expenses: 20, quarter: 4 },
//     { name: 'November', revenue: 21, expenses: 20, quarter: 4 },
//     { name: 'December', revenue: 18, expenses: 20, quarter: 4 } 
// ]

// let selectedQuarter = 1
// let selectedMonths = []
// for(let i = 0; i < allMonths.length; i++){
//     let month = allMonths[i]
//     if(month.quarter === selectedQuarter){
//         selectedMonths.push(month)
//     }
// }

// rewrite the above using filter
// let selectedQuater = 1
// const monthsQuater = allMonths.filter (month => month.quarter === selectedQuater)
// // const adults = people.filter(person => person.age >= 18) // same tham the top preferable
// console.log(monthsQuater)


//forEach, map, filter

//get the firstnames using .map 
let users = [
    { id: 1, firstName: 'Azami', lastName: 'Bazia', age: 18 },
    { id: 2, firstName: 'Elliot', lastName: 'Noor', age: 23 },
    { id: 3, firstName: 'Samir', lastName: 'Zahara', age: 7 },
    { id: 4, firstName: 'Idris', lastName: 'Christenson', age: 16 },
]
//  const firstNames = users.map(user => { return user.firstName })
//  console.log(firstNames)

// const fullNames = users.map(user =>  `${user.firstName} ${user.lastName}`)
// console.log(fullNames)

//get all teenagers 13-18
const teenagers= users.filter(user=>user.age<=18 && user.age>=13)
 console.log(teenagers)

//  const teenagers = users.filter(user => {
//         if (user.age <= 18){
//             return user
//         }
//     })
//     console.log(teenagers)