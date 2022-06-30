import { Router } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import Product from "../models/product.ts";
import { faker } from "https://deno.land/x/deno_faker@v1.0.3/mod.ts";

const router = new Router();

router.get("/", async (cxt) => {
  try {
    const products = await Product.all();
    cxt.response.body = products;
  } catch (error) {
    cxt.throw(400, error.message);
  }
});

router.post("/", async (cxt) => {
  try {
    const payload = await cxt.request.body().value;
    const product = await Product.create({
      title: faker.name.findName(),
      ownerId: parseInt(payload.owner_id),
    });
    cxt.response.body = {
      product,
      message: "Product created",
    };
  } catch (error) {
    cxt.throw(400, error.message);
  }
});

router.get("/:id", async (cxt) => {
  try {
    // const product = await Product.where("id", cxt.params.id).get();
    const product = await Product.find(cxt.params.id);
    cxt.response.body = product;
  } catch (error) {
    cxt.throw(400, error.message);
  }
});

export default router;
