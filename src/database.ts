import { Knex, knex as setupKnex } from 'knex'
import { env } from './env'

const connectionService =
  env.DATABASE_CLIENT === 'sqlite'
    ? {
        filename: env.DATABASE_CLIENT,
      }
    : env.DATABASE_CLIENT

export const config: Knex.Config = {
  client: env.DATABASE_CLIENT,
  connection: connectionService,

  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)
