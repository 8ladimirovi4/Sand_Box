//----------------------Паттерн "Стратегия" (Strategy)------------------------------//

// Что это? Паттерн "Стратегия" позволяет определять семейство алгоритмов, инкапсулировать их и делать их взаимозаменяемыми. Стратегия позволяет клиенту выбирать алгоритм на лету.

// Когда использовать?

// Когда у вас есть несколько алгоритмов для выполнения одной задачи, и вам нужно предоставить возможность выбора алгоритма во время выполнения.
// Когда алгоритмы должны быть инкапсулированы, чтобы их можно было легко изменять без изменения остальной части системы.
// Пример: Предположим, у вас есть система для вычисления скидок в магазине. Вы можете иметь разные стратегии расчета скидки, такие как 
// "скидка по проценту", "фиксированная скидка" или "скидка для постоянных клиентов". Паттерн "Стратегия" позволяет легко переключаться между этими стратегиями.

// Стратегии
class PercentageDiscount {
    apply(price) {
      return price * 0.9; // скидка 10%
    }
  }
  
  class FixedDiscount {
    apply(price) {
      return price - 10; // скидка 10 долларов
    }
  }
  
  class LoyaltyDiscount {
    apply(price) {
      return price * 0.85; // скидка 15% для постоянных клиентов
    }
  }
  
  // Контекст
  class ShoppingCart {
    constructor(discountStrategy) {
      this.discountStrategy = discountStrategy;
    }
  
    setDiscountStrategy(discountStrategy) {
      this.discountStrategy = discountStrategy;
    }
  
    calculateTotal(price) {
      return this.discountStrategy.apply(price);
    }
  }
  
  // Использование
  const cart = new ShoppingCart(new PercentageDiscount());
  console.log(cart.calculateTotal(100)); // 90
  
  cart.setDiscountStrategy(new FixedDiscount());
  console.log(cart.calculateTotal(100)); // 90
  
  cart.setDiscountStrategy(new LoyaltyDiscount());
  console.log(cart.calculateTotal(100)); // 85

//---------------------------------Паттерн "Фасад" (Facade)-----------------------------//

// Что это? Паттерн "Фасад" предоставляет упрощённый интерфейс для работы с более сложной системой, 
// скрывая детали реализации. Он создаёт "оболочку" вокруг сложной системы, делая её использование проще.

// Когда использовать?

// Когда система слишком сложна, и нужно упростить её использование.
// Когда требуется создать единый интерфейс для нескольких взаимодействующих систем или компонентов.
// Пример: Предположим, у вас есть сложная система, которая управляет различными частями компьютера: процессором, 
// памятью, хранилищем данных и т.д. Фасад может скрыть детали этих систем и предоставить простой интерфейс для их использования.

// Сложные системы
class CPU {
    start() {
      console.log('CPU started');
    }
    stop() {
      console.log('CPU stopped');
    }
  }
  
  class Memory {
    load() {
      console.log('Memory loaded');
    }
    unload() {
      console.log('Memory unloaded');
    }
  }
  
  class HardDrive {
    read() {
      console.log('Reading from hard drive');
    }
    write() {
      console.log('Writing to hard drive');
    }
  }
  
  // Фасад
  class Computer {
    constructor() {
      this.cpu = new CPU();
      this.memory = new Memory();
      this.hardDrive = new HardDrive();
    }
  
    start() {
      this.cpu.start();
      this.memory.load();
      this.hardDrive.read();
    }
  
    stop() {
      this.cpu.stop();
      this.memory.unload();
      this.hardDrive.write();
    }
  }
  
  // Использование
  const computer = new Computer();
  computer.start(); // Запускает все системы через фасад
  computer.stop();  // Останавливает все системы через фасад


//-----------------------------Паттерн "Декоратор" (Decorator)-------------------------//

// Что это? Паттерн "Декоратор" позволяет динамически добавлять объектам новые функциональные возможности, 
// оборачивая их в другие объекты. Это позволяет изменять поведение объектов без изменения их кода.

// Когда использовать?

// Когда нужно добавить дополнительные возможности объекту, не меняя его внутреннюю структуру.
// Когда нужно расширить функциональность объекта, но не создавать множество подклассов.
// Пример: Предположим, у вас есть базовый объект, который выполняет операцию, например, печатает текст. 
// Вы хотите добавить дополнительную функциональность, например, логирование или подсветку текста. Вместо 
// того чтобы изменять класс, вы можете использовать декоратор.

// Базовый объект
class TextPrinter {
    print(text) {
      console.log(text);
    }
  }
  
  // Декоратор 1: Логирование
  class LoggerDecorator {
    constructor(printer) {
      this.printer = printer;
    }
  
    print(text) {
      console.log('Logging: ' + text);
      this.printer.print(text);
    }
  }
  
  // Декоратор 2: Подсветка
  class HighlightDecorator {
    constructor(printer) {
      this.printer = printer;
    }
  
    print(text) {
      console.log('Highlighting: ' + text);
      this.printer.print(text);
    }
  }
  
  // Использование
  const printer = new TextPrinter();
  const loggerPrinter = new LoggerDecorator(printer);
  const highlightedLoggerPrinter = new HighlightDecorator(loggerPrinter);
  
  highlightedLoggerPrinter.print('Hello, world!');
  // Вывод:
  // Highlighting: Hello, world!
  // Logging: Hello, world!
  // Hello, world!
  