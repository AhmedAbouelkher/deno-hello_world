import { Application } from "https://deno.land/x/oak@v10.6.0/mod.ts";

import router from "./routes/router.ts";
import db from "./database/database.ts";
import linkAndSync from "./database/link.ts";

const app = new Application();

app.use(router.routes(), router.allowedMethods());

await linkAndSync();

console.log("Server has started");
await app.listen({ port: 3000 });

await db.close();
console.log("DB has been closed");
