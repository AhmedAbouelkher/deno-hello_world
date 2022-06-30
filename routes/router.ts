import { Router } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import productsRouter from "./products.ts";
import ownersRouter from "./owners.ts";

const router = new Router();

router.get(
  "/products",
  productsRouter.routes(),
  productsRouter.allowedMethods()
);
router.get("/owners", ownersRouter.routes(), ownersRouter.allowedMethods());

export default router;
