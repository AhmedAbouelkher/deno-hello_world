import { Model, DataTypes } from "https://deno.land/x/denodb@v1.0.40/mod.ts";
import Owner from "./owner.ts";

export default class Product extends Model {
  static table = "products";

  static fields = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },

    title: {
      type: DataTypes.STRING,
    },
  };

  static owner() {
    return this.hasOne(Owner);
  }

  static timestamps = true;
}
