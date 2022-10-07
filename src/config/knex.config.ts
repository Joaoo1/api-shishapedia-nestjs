import { KnexModuleOptions } from 'nestjs-knex';
import { env } from './env.config';

export const knexConfig: KnexModuleOptions = {
  config: {
    client: 'pg',
    connection: env.databaseConnection,
  },
};
