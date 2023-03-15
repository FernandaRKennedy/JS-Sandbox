class Vehicle {
    constructor(brend, model, year, color){
        this.brend = brend,
        this.model = model,
        this.year = year,
        this.color = color ,
        this.power = power,
        this.speed = 0,
    }
  start(power) {
  this.power = power
}
speed( speed){
   if( this.speed <= 0 ){
    console.log("ready to start")
   }else{
    console.log("in moviment")
   }
}

}
const harleyD = new Vehicle("harley-D", "iron 883", "2018", "shine green")
console.log(harleyD)



