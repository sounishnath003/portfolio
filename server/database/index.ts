import { config } from "dotenv";
import { mongo } from "mongoose";

config();

export async function createMongoDBConnection() {
  try {
    console.log("Connecting to MongoDB...", process.env.DATABASE_URL);
    const onSucceed = await mongo
      .connect(process.env.DATABASE_URL as string, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        poolSize: 10,
      })
      .catch((e) => {
        throw new Error(e);
      });

    console.log(`### MongoDB Connection has been established`);
  } catch (error) {
    console.error(error);
  }
}
