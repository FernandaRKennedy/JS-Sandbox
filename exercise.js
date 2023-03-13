//quizz 4
let  animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
let transformad = animals.map(animal =>{
  return animal.slice(0,2)
})
console.log(transformad)

function multiply (x,y){
    return x * y
}
console.log(multiply(5))



 function playMusic(){
    console.log('😀')
 }
 playMusic()
 
 function discussWeather(temp){
    if (temp>=80){
        return "wow, it is a toasty day"
    }
    else if(temp <= 32) {
        return "brr! is a cold day"
    }
    else{
        return"ahh plesent day"
    }
 }
 console.log(discussWeather(65))

 // activity 4

 
function forEach(iteration){
    console.log(arr)
  
}

forEach([ 1, 2, 3 ], function(number){
    console.log('iteration', number)
})
