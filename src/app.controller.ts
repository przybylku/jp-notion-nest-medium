import { Controller, Post, Res } from "@nestjs/common";
import { AppService } from "./app.service";
import { Response } from "express";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async CreateItemInDatabase(@Res() res: Response): Promise<any> {
    return res.json(this.appService.createItemInDatabase());
  }
}
