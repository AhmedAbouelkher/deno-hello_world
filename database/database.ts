import {
  Database,
  SQLite3Connector,
} from "https://deno.land/x/denodb@v1.0.40/mod.ts";

const connector = new SQLite3Connector({
  filepath: "./database.sqlite",
});

const db = new Database(connector);
export default db;
