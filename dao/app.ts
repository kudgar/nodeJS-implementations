// app.ts

/**
 * 4. Используйте DAO в вашем приложении.
 */

import { UserDAO } from './user.dao';

(async () => {
  const userDao = new UserDAO();
  const user = await userDao.getUserById(1);
  if (user) {
    console.log('User found:', user);
  } else {
    console.log('User not found.');
  }
})();
