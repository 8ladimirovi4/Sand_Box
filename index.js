// полиморфизм — это способность объектов с одинаковым интерфейсом (одинаковыми именами методов) иметь разную реализацию (разное поведение) этих методов.

class Character {
  constructor(name, health, strength){
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
  showStatus(){
    return `герой: \n${this.name} \nздоровье: ${this.health} \nсила ${this.strength}`
  }
}

const hero = new Character('Goblin', 50, 10)

console.log('===> ', hero.showStatus())

class Potion {
  constructor(name){
    this.name = name
  }

  drink(character){
     console.log(`герой ${character.name} выпивает ${this.name}`)
      this._applyEffect(character);
  }
   _applyEffect() {
    throw new Error("Метод _applyEffect должен быть реализован в дочернем классе!");
  }
}

class HealthPotion extends Potion {
  constructor(){
    super('Health Potion')
  }
  _applyEffect(character){
    return character.health += 10
  }
}

class StrengthPotion extends Potion {
  constructor(){
    super('Strength Potion')
  }
  _applyEffect(character){
    return character.strength += 20
  }
}

class Sword {
  constructor(){
    this.name = 'Sword'
  }
}

const bagWithPotions = [
  new HealthPotion(),
  new StrengthPotion(),
  new Sword ()
]

bagWithPotions.forEach(potion => {
 if(potion instanceof Potion)
  potion.drink(hero)
})

console.log('===> ', hero.showStatus())