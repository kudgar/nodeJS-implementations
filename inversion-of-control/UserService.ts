// UserService.ts
import { IUserService } from './IUserService';
import { ILogger } from './ILogger';
import { EmailService } from './EmailService';

export class UserService implements IUserService {
  private logger: ILogger;
  private emailService: EmailService;

  constructor(logger: ILogger, emailService: EmailService) {
    this.logger = logger;
    this.emailService = emailService;
  }

  public notifyUser(userId: string): void {
    // Реализация уведомления пользователя, например, по электронной почте.
    this.logger.log(`Sending notification to user ${userId}`);
    this.emailService.sendEmail('user@example.com', 'Notification content');
  }
}