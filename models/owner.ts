import { Model, DataTypes } from "https://deno.land/x/denodb@v1.0.40/mod.ts";
import Product from "./product.ts";

export default class Owner extends Model {
  static table = "owners";

  static fields = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
    },
  };

  static products() {
    return this.hasMany(Product);
  }

  static timestamps = true;
}
