// app.ts (Точка входа приложения)
import { ConsoleLogger } from './ConsoleLogger';
import { EmailService } from './EmailService';
import { UserService } from './UserService';

function bootstrap() {
  const logger = new ConsoleLogger();
  const emailService = new EmailService();
  const userService = new UserService(logger, emailService);

  userService.notifyUser('123');
}

bootstrap();
