const animal = new Animal();
const cat = new Cat();
const dog = new Dog();

const catSayHi = animal.sayHi.bind(cat);
const dogSayHi = animal.sayHi.bind(dog);
