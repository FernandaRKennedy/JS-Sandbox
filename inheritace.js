class Animal{
    constructor(species,color){
        this.species = species
        this.color = color
    }
    makeNoise(){
        console.log("noise")
    }
}

class Dog extends Animal{
    constructor(species, color, name, bread, age, ){
    super(species,color)
    this.name = name
    this.bread = bread
    this.age = age 
}
 bark(){
    console.log("bark")
}
}

class Cat extends Animal{
    constructor(species, color, name, bread, age, ){
    super(species,color)
    this.name = name
    this.bread = bread
    this.age = age 
}
 bark(){
    console.log("meow")
}
hiss()
{
    console.log("hiss")
}
}
const fish = new Animal("clow", "orange")
console.log(fish)
 fish.makeNoise()
const Athena = new Dog('dog', 'white', 'athena', 'pitbull', 5)
console.log(Athena)
Athena.makeNoise()
// Athena.bark()
const Floquinho = new Cat('cat',)