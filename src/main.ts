import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { configDotenv } from "dotenv";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  configDotenv();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
