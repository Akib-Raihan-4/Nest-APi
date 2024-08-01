/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { UserModule } from './user/user.module';
// import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MikroOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        driver: PostgreSqlDriver,
        clientUrl: configService.get('DATABASE_URL'),
        driverOptions: {
          connection: { ssl: { rejectUnauthorized: false } },
        },
        autoLoadEntities: true,
        debug: configService.get('NODE_ENV') !== 'production',
      }),
      inject: [ConfigService],
    }),
    UserModule,
  ],
  // controllers: [AppController],
})
export class AppModule {}
