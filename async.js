// setTimeout(() => {
//  console.log("TIMER OVER")
// },3000)
// console.log("end of program")

// let  name = "nanda"
// setTimeout(()  =>{
//     name ="ryan"
//     console.log(name)
//     setTimeout(()=>{
//         name = "tim"
//         console.log(name)
//     },3000)
// },1000) 

// name = "corey"

// const character = createCharacter(10, 10, 'assets/green-character')
// character.walkEast()

// setTimeout(()=> {
//   character.stop()
// },1500)

// const character = createCharacter(10, 10, 'assets/green-character')
  
// character.walkEast()
// setTimeout(()=> {
//   character.walkNorth()
//   setTimeout(()=> {
//     character.walkEast()
//     setTimeout (()=>{
// character.stop()
//     },500)
//   },500)
// },500)




// const character_1 = createCharacter(10, 10, 'assets/green-character')
// const character_2 = createCharacter(100, 100, 'assets/green-character')



// // character_1.walkEast()
// // setTimeout(()=> {
// //   character_1.walkNorth()
// //   setTimeout(()=> {
// //     character_1.walkEast()
// //     setTimeout (()=>{
// // character_2.stop()
// //     },500)
// //   },500)
// // },750)

// // character_2.walkWest()
// // setTimeout(()=> {
// //   character_2.walkSouth()
// //   setTimeout(()=> {
// //     character_2.walkEast()
// //     setTimeout (()=>{
// // character_2.stop()
// //     },750)
// //   },500)
// // },500)


// //better way
// character_1.walkEast()
// character_2.walkWest()
// setTimeout(()=>{
//   character_1.walkNorth()
//   character_2.walkSouth()
//     setTimeout(()=>{
//         character_1.walkWest()
//       	character_2.walkEast()
//         setTimeout(()=>{
//             character_1.stop()
//           	character_2.stop()
//         }, 500)
//     }, 500)
// }, 750)



  
// character.walkEast()
// setTimeout(()=> {
//   character.walkNorth()
//   setTimeout(()=> {
//     character.walkEast()
//     setTimeout (()=>{
// character.stop()
//     },500)
//   },500)
// },500)

// function walkEast (time){
// //moving code here 
// setTimeout(() => {
//     //character stop moving
//     //character.stop()
//     console.log("finished walking east")
// }, time )
// }

// function walkNorth (time){
//     //moving code here 
//     setTimeout(() => {
//         //character stop moving
//         console.log("finished walking north")
//     }, time )
//     }

//     walkEast(2500);
//     walkNorth(5000);