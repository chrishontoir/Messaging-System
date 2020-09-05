import { Router } from "./deps.ts";

export const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Hi there";
});
