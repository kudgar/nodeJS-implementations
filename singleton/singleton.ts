class Singleton {
  private static instance: Singleton;

  // Закрытый конструктор предотвращает внешнее создание экземпляров
  private constructor() {
    // Инициализация компонентов
  }

  // Метод для получения экземпляра Singleton
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  // Пример метода
  public someMethod() {
    // Ваш код
  }
}

// Использование
const singletonInstance = Singleton.getInstance();
singletonInstance.someMethod();
