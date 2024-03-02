import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { AwsConfig } from './utils/aws.config';
import { WinstonLogger } from './utils/winston-log';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  AwsConfig(configService.get('awsConfig'))
  const port = configService.get('port')
  app.useLogger(WinstonLogger(configService.get('cloudWatchConfig'), configService.get('nodeEnv')))
  app.setGlobalPrefix('api')
  app.enableCors()
  await app.listen(port);
  Logger.log(`Application running on ${port}`)
}
bootstrap();
