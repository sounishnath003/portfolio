import { createMongoDBConnection } from "../database";
import { kickStartTheServer } from "../server";

async function main() {
  await createMongoDBConnection();
  kickStartTheServer();
}

main().catch((e) => console.error(e));
