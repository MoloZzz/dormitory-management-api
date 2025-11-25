import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DormitoryModule } from './dormitory/dormitory.module';
import { LoggerModule } from './logger/logger.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env`],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const sslEnabled = config.get('DATABASE_SSL') === 'true';

        return {
          type: 'postgres',
          url: config.get('DATABASE_URL'),
          autoLoadEntities: true,
          synchronize: true,

          ssl: sslEnabled
            ? { rejectUnauthorized: false }
            : false,
        };
      },
    }),
    DormitoryModule,
    LoggerModule.register('DormitoryManagementAPI'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
