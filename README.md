# Notion Database Integration with Nest.js

This project demonstrates how to create and manage items in a Notion database using Nest.js and the Notion API. It's a simple setup to show how you can use Nest.js for interacting with Notion, allowing you to programmatically add pages to your Notion database.

## Features

- 📝 **Add a New Item to Notion Database**: The app allows you to create a new page in your Notion database by sending a POST request with the required parameters.
- 🔐 **Notion API Integration**: Uses the official Notion SDK to interact with the database and handle page creation.
- 🧾 **DTO for Data Validation**: Ensures the data being passed to the API has the correct format with the help of Nest.js DTOs (Data Transfer Objects).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14.x or later)
- [Nest.js CLI](https://docs.nestjs.com/) (`npm install -g @nestjs/cli`)
- [Notion API Key](https://www.notion.so/my-integrations) (create one from the Notion developer dashboard)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/notion-nestjs-integration.git
   cd notion-nestjs-integration
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Notion API credentials:

   ```bash
   API_KEY=your-notion-api-key
   DATABASE_ID=your-notion-database-id
   ```

4. Start the development server:

   ```bash
   npm run start:dev
   ```

### Usage

1. Start your local server using `npm run start:dev`.
2. Use Postman or any API testing tool to send a `POST` request to `http://localhost:3000/`.
3. The body of your request should contain the following fields:

   ```json
   {
     "Name": "My New Page",
     "Content": "This is a sample content for my Notion page.",
     "Published": "2024-01-01",
     "ReadingTime": 5
   }
   ```

4. The API will respond with the newly created page details from your Notion database.

### Example Request

Here’s an example `POST` request using **cURL**:

```bash
curl -X POST http://localhost:3000/ \\
-H 'Content-Type: application/json' \\
-d '{
  "Name": "My New Notion Page",
  "Content": "Here is some content for the new page",
  "Published": "2024-09-01",
  "ReadingTime": 5
}'
```

### DTO Validation

The following fields are required and validated via the DTO:

- `Name` (string): The title of the new page.
- `Content` (string): The content of the page.
- `Published` (string, date): The publication date.
- `ReadingTime` (number): Estimated reading time.

### Project Structure

```plaintext
src/
│
├── app.controller.ts     # Defines the API endpoints
├── app.module.ts         # Main module for the app
├── app.service.ts        # Contains the logic for interacting with Notion API
├── dto/                  # Contains the DTO for data validation
│   └── createNotionItem.ts
└── main.ts               # Entry point for the app
```

### Notion Setup

To integrate this project with Notion:

1. Create a Notion database.
2. Copy your database ID by selecting "Copy link to view" from the Notion UI.
3. Add the database ID and API key to your `.env` file as shown above.

### API Key and Database ID

- **API Key**: You can create an API key from your Notion integrations dashboard.
- **Database ID**: To find your database ID, open the database in Notion, click the "⋮" menu in the top right, and choose "Copy link to view." Extract the database ID from the URL.

## Authors

- [@przybylku](https://github.com/przybylku)

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
