import { Relationships } from "https://deno.land/x/denodb@v1.0.40/mod.ts";
import Owner from "../models/owner.ts";
import Product from "../models/product.ts";
import db from "./database.ts";

const linkAndSync = async () => {
  Relationships.belongsTo(Product, Owner);

  db.link([Product, Owner]);

  await db.sync();
};

export default linkAndSync;
