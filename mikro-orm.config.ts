/* eslint-disable prettier/prettier */
import { Options } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { User } from './src/user/user.entity';

const config: Options = {
  driver: PostgreSqlDriver,
  clientUrl: process.env.DATABASE_URL,
  driverOptions: {
    connection: { ssl: { rejectUnauthorized: false } },
  },
  entities: [User],
  entitiesTs: ['./src/**/*.entity.ts'],
  metadataProvider: TsMorphMetadataProvider,
  debug: process.env.NODE_ENV !== 'production',
};

export default config;