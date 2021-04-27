import cors from "cors";
import express from "express";
import { MongoConfig } from "./config/Mongoconfig";
import { Logger } from "winston";
import logger from "../src/config/logger";
import { BookRoute } from "./routes/bookrouter";
import { UserRoute } from "./routes/userrouter";

import bodyParser from "body-parser";
import { loggers } from "winston";


const app: express.Application = express();
const book = new BookRoute();
const user = new UserRoute();




app.use(cors());
app.use(bodyParser.json());
new MongoConfig();
book.BookRouter(app);

user.UserRouter(app);
app.listen(4000, () => {
    logger.info("App is listening on port 4000");
  });
   
  export default app;
    