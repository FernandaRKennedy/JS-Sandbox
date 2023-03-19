function demo(time){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve('complete')
      },time)
    })
}

async function main(){
    console.log('starting...')
   const val = await demo (5000)
   console.log(val)
   console.log('finished ....')
} 

 main()
 console.log('test')

//same then the top one 
// const main = async () =>{

// }

//fetching something from the internet
// fetch('httpcll')
// .then(res => res.json())
// .then(data =>console.log(data))

// async function main (){
//     const res = await fetch('https://github.com/FernandaRKennedy')
//     const data = await res.json()
//         console.log(data)
  
// }
// main()

// activity 7

/*steep-async
Accepts: hot water
Returns: tea
season-sync
Accepts: eggs
Returns: seasoned eggs
fry-async
Accepts: raw bacon or eggs
Returns: cooked bacon or eggs
boil-async
Accepts: water
Returns: hot water
sweeten-sync
Accepts: tea
Returns: sweetened tea
serve- sync
Accepts: a finished food item
Returns: nothing*/

// async function cookBacon(){
//   let rawBacon =  'ðŸ¥©'
//   const cookedBacon = await fry(rawBacon)
//   served(cookedBacon)  
// }

// async function cookEggs(){
//   const rawEgg = 'ðŸ¥š'
//   const cookedEggs =  await fry(rawEgg)
//   const seasonedEggs = season(cookedEggs)
//   serve(seasonedEggs)  
// }

// async function makeTea(){
//   const water = 'ðŸ’§'
//   const boiledWater = await boil (water)
//   const tea = await steep(boiledWater)
//   const seeteendTea = sweeten(tea)
//   serve(seeteendTea)
// }    

// cookBacon()
// makeTea()
// cookEggs()


// async function makeBreakfast(){
//  await cookEggs()
//  await makeTea()
//   await cookBacon()
 
// }

// makeBreakfast()


