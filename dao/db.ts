// db.ts

/**
 * 1. Настройте Knex для подключения к вашей базе данных PostgreSQL.
 */
import knex from 'knex';

const db = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'your_database_user',
    password: 'your_database_password',
    database: 'your_database_name'
  }
});

export default db;
