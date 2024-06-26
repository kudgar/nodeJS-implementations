Вот пример реализации принципа Inversion of Control (IoC) в Node.js с использованием TypeScript и объектно-ориентированного программирования (ООП). Здесь мы будем использовать паттерн "зависимость через конструктор" для внедрения зависимостей.

В этом примере:

- ILogger - интерфейс для сервиса логирования.
- ConsoleLogger - конкретная реализация сервиса логирования, выводящая сообщения в консоль.
- EmailService - сервис для отправки электронной почты.
- IUserService - интерфейс для сервиса управления пользователями.
- UserService - реализация сервиса управления пользователями, использующая сервис логирования и сервис отправки электронной почты.
- app.ts - точка входа в приложение, в которой создаются экземпляры всех сервисов и вызывается метод notifyUser для демонстрации IoC в действии.

IoC достигается за счёт того, что UserService не создаёт зависимости сам, а получает их через конструктор. Это позволяет легко заменить зависимости при тестировании или рефакторинге.