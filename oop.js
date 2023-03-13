// const athena ={
//     name:'athena',
//     age: 5 ,
//     location:'raleigh',
//     greeting: function(){
//         console.log(`helo my name is ${this.name}`)
//     }
// }
// const toby ={
//     name:'toby',
//     age: 4 ,
//     location:'raleigh',
//     greeting: function(){
//         console.log(`helo my name is ${this.name}`)
//     }
// }

class Person {
    constructor(name,age,location){
        this.name = name,
        this.age = age,
        this.location = location
    }
    greeting(){
        console.log(`helo my name is ${this.name}`)
    }
    addFriend(friend){
        this.friends.push(friend)
    }
}

const athena = new Person ('athena',5,'raleigh')
// console.log(athena.age)
athena.greeting()
athena.addFriend(toby)

const  toby = new Person ('toby',5,'raleigh')
toby.greeting()