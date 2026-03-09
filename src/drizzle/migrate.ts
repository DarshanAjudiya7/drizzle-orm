import { drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import Database from "better-sqlite3";

const sqlite = new Database("sqlite.db");
const db = drizzle(sqlite);

async function main() {
    console.log("Running migrations...");
    // migrationsFolder must point to where they are generated
    await migrate(db, { migrationsFolder: "./src/drizzle/migrations" });
    console.log("Migrations completed successfully!");
    sqlite.close();
    process.exit(0);
}

main().catch((error) => {
    console.error("Error running migrations:", error);
    process.exit(1);
});
