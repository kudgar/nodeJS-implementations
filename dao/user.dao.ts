// user.dao.ts

/**
 * 3. Создайте DAO (Data Access Object). DAO отвечает за доступ к данным и их манипуляцию.
 */

import db from './db';
import { UserDTO } from './user.dto';

export class UserDAO {
  public async getUserById(id: number): Promise<UserDTO | null> {
    const user = await db('users').where({ id }).first();
    if (!user) return null;
    return { id: user.id, username: user.username, email: user.email };
  }

  // Методы для создания, обновления и удаления пользователя также должны быть здесь
}
