// ConsoleLogger.ts
import { ILogger } from './ILogger';

export class ConsoleLogger implements ILogger {
  public log(message: string): void {
    console.log(message);
  }
}