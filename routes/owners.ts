import { Router } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import { faker } from "https://deno.land/x/deno_faker@v1.0.3/mod.ts";
import Owner from "../models/owner.ts";

const router = new Router();

router.post("/", async (cxt) => {
  try {
    const owner = await Owner.create({
      name: faker.name.findName(),
    });
    cxt.response.body = owner;
  } catch (error) {
    cxt.throw(400, error.message);
  }
});

router.get("/products/:id", async (cxt) => {
  try {
    const owner = await Owner.where("id", cxt.params.id).products();
    cxt.response.body = owner;
  } catch (error) {
    cxt.throw(400, error.message);
  }
});

export default router;
