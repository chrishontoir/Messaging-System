import { Router } from "./deps.ts";

export const router = new Router();

router.get("/", (ctx: any) => {
  ctx.response.body = "Hi there";
});
