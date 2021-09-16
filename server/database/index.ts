import { config } from "dotenv";
import mongoosse from "mongoose";
config();

mongoosse.set('debug', true);

export async function createMongoDBConnection() {
  try {
    console.log("Connecting to MongoDB...", process.env.DATABASE_URL);
    const onSucceed = await mongoosse
      .connect(process.env.DATABASE_URL as string, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        poolSize: 10,
        loggerLevel: "full"
      })
      .catch((e) => {
        throw new Error(e);
      });

    console.log(`### MongoDB Connection has been established`);
  } catch (error) {
    console.error(error);
  }
}

export const mongoose = mongoosse;
