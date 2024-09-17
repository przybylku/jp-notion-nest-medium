import { Body, Controller, Get, Post, Res } from "@nestjs/common";
import { AppService } from "./app.service";
import { Response } from "express";
import { CreateDatabaseItem } from "./dto/createNotionItem";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async CreateItemInDatabase(
    @Body() body: CreateDatabaseItem,
    @Res() res: Response,
  ): Promise<any> {
    const result = await this.appService.createItemInDatabase(body);
    return res.json(result);
  }
}
