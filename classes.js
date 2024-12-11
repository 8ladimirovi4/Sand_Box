class Animal {
    sayHi(){
        return `Hi ${this.voice}`
    }
}

class Cat extends Animal{
    voice = 'Meoy'
}

class Dog extends Animal{
    voice = 'Bark'
}