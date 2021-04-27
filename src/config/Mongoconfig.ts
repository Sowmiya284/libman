import mongoose from "mongoose";
import { Logger } from "winston";
import logger from "./logger";
export class MongoConfig {
  constructor() {
    mongoose
      .connect(
        "mongodb+srv://sowmiya:sowmi284@devconnector.q1xtb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
      )
      .then(() => {
        logger.info("DB Connnected");
      })
      .catch(() => {
        logger.error("Err on connection");
      });
  }
}
