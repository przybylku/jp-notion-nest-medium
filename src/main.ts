import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { configDotenv } from "dotenv";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  configDotenv();
  await app.listen(3000);
}
bootstrap();
