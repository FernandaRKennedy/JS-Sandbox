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

// class Person {
//     constructor(name,age,location){
//         this.name = name,
//         this.age = age,
//         this.location = location
//     }
//     greeting(){
//         console.log(`helo my name is ${this.name}`)
//     }
//     addFriend(friend){
//         this.friends.push(friend)
//     }
// }

// const athena = new Person ('athena',5,'raleigh')
// // console.log(athena.age)
// athena.greeting()
// athena.addFriend(toby)

// const  toby = new Person ('toby',5,'raleigh')
// toby.greeting()

// const me = {
//     name:'athena',
//         age: 5 ,
//         location:'raleigh',
//         greeting: function()  {
//             console.log(`helo my name is ${this.name}`)
//         },
//     } ;

   class Person{
      constructor(name, age, location){
        this.name = name,
        this.age = age,
        this.location = location
        this.isAlive = true
        this.friends = []
      }
      greeting(){
                console.log(`helo my name is ${this.name}`)
            }
   addFriend(person){
    this.friends.push(person)
   }
   }

const nanda = new Person('nanda',29, 'raleigh')//instantiate: objects that have been created 
const nill = new Person('nill', 34,'nyc')

console.log(nanda)

nanda.greeting()
nill.greeting()

 nill.addFriend(nanda)
 console.log(nill)

class Pet {
    constructor(name, species, bread, age){
        this.name = name 
        this.species = species
        this.bread = bread
        this.age = age
    }
    makeNoise (){
        console.log('grumble')
    }
}
 const athena= new Pet("ATHENA","pitbull","brown and white ", 5 ) 
 console.log(athena)
athena.makeNoise()


 //DRY: DONT REPEAT YOURSELF
