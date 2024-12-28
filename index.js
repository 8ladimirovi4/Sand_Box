
//@ts-nocheck
//Геттеры и Сеттры в объектах

//Геттрер в объекте Вариант с одинаковым методом
const person = {
  firstName: 'John',
  lastName: 'Doe',

  // Геттер
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  // Сеттер
  // set fullName(name) {
  //   const parts = name.split(' ');
  //   this.firstName = parts[0];
  //   this.lastName = parts[1];
  // }
};

console.log(person.fullName); // John Doe (геттер вызывается как свойство)

person.fullName = 'Jane Smith'; // Сеттер изменяет firstName и lastName

console.log(person.fullName); // John Doe(в этом мете еще не указан сеттер)


//возможно изменить свойсвто объекта
Object.defineProperty(person, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(" ");
  }
});

person.fullName = 'Jane Smith'; // Сеттер изменяет firstName и lastName

console.log(person.fullName); // Jane Smith (в этом месте уже определен сеттер в Object defineproperty)

//Геттеры и Сеттры в классах

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Геттер
  get area() {
    return this.width * this.height;
  }

  // Сеттер
  set dimensions({ width, height }) {
    this.width = width;
    this.height = height;
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.area); // 50 (геттер)

rect.dimensions = { width: 20, height: 10 }; // Сеттер
console.log(rect.area); // 200


//приватные свойства класса
class Person {
  #password;

  constructor(name, password) {
    this.name = name;
    this.#password = password;
  }

  checkPassword(input) {
    console.log('===> this.#password', this.#password) //свойство доступно только внутри класса 
    return this.#password === input;
  }
}

const user = new Person('Alice', 'secret123');
console.log(user.checkPassword('secret123')); // true
console.log(user.checkPassword('wrongPass')); // false

// Доступ к паролю невозможен:
//console.log(user.#password); // Ошибка

//нельзя указывать свойство класса такое же как и getter, (this.age = age; и get age() {return this.age;}) 
//таком случае будет происходить рекурсивынй вызов геттреа и переполнится стек.


//приватные статические методы классов
class MyClass {
  static #privateStaticMethod() {
    console.log('This is a private static method.');
  }

  static publicMethod() {
    console.log('Calling the private static method...');
    this.#privateStaticMethod();
  }
}

// Вызов публичного метода
MyClass.publicMethod(); // "Calling the private static method..."
// "This is a private static method."

// Попытка вызвать приватный статический метод снаружи вызовет ошибку
// MyClass.#privateStaticMethod(); // Ошибка: Private field '#privateStaticMethod' must be declared in an enclosing class

class Parent {
  static #hiddenMethod() {
    console.log('Hidden in Parent');
  }

  static test() {
    Parent.#hiddenMethod();
  }
}

class Child extends Parent {
  //Попытка вызвать приватный метод родителя вызовет ошибку
  // static testChild() {
  //   this.#hiddenMethod(); // Ошибка
  // }
}

Parent.test(); // "Hidden in Parent"

class MathUtils {
  static #square(num) {
    return num * num;
  }

  static calculateHypotenuse(a, b) {
    return Math.sqrt(this.#square(a) + this.#square(b));
  }
}

console.log(MathUtils.calculateHypotenuse(3, 4)); // 5
// MathUtils.#square(3); // Ошибка: Приватный метод недоступен

