import { Injectable } from "@nestjs/common";
import { Client } from "@notionhq/client";
import { CreatePageParameters } from "@notionhq/client/build/src/api-endpoints.js";
@Injectable()
export class AppService {
  properties_: Record<string, any> = {
    Name: {
      type: "title",
      title: [{ type: "text", text: { content: "blog article example" } }],
    },
  };

  async createItemInDatabase() {
    const Notion = new Client({
      auth: process.env.API_KEY,
    });

    const newPage = await Notion.pages.create({
      parent: {
        database_id: process.env.DATABASE_URL,
      },
      properties: this.properties_,
    });

    return newPage;
  }
}
