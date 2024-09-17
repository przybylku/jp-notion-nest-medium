import { Injectable } from "@nestjs/common";
import { Client } from "@notionhq/client";
import { CreatePageResponse } from "@notionhq/client/build/src/api-endpoints.js";
import { CreateDatabaseItem } from "./dto/createNotionItem";
@Injectable()
export class AppService {
  // Create a new page in Notion database
  async createItemInDatabase(body: CreateDatabaseItem): Promise<any> {
    try {
      const properties_: Record<string, any> = {
        Name: {
          type: "title",
          title: [{ type: "text", text: { content: body.Name } }],
        },
        Content: {
          type: "rich_text",
          rich_text: [{ type: "text", text: { content: body.Content } }],
        },
        Published: {
          type: "date",
          date: { start: body.Published },
        },
        "Reading Time": {
          type: "number",
          number: body.ReadingTime,
        },
      };
      // Initialize the Notion client
      const Notion = new Client({
        auth: process.env.API_KEY,
      });
      // Create a new page in the Notion database
      const newPage = await Notion.pages.create({
        parent: {
          database_id: process.env.DATABASE_URL,
        },
        properties: properties_,
      });
      console.log(newPage.id);
      return {
        id: newPage.id,
        url: `https://notion.so/${newPage.id}`,
        ok: true,
        erorr: null,
      };
    } catch (error) {
      console.error(error);
      return {
        ok: false,
        error: error.message,
      };
    }
  }
}
