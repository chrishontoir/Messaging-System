import { Application, send } from "../deps.ts";

const app = new Application();

const __dirname = new URL("../static", import.meta.url).pathname;

app.use(async (ctx) => {
  await send(ctx, ctx.request.url.pathname, {
    root: __dirname,
    index: "index.html",
  });
});

app.listen({ port: 3000 });
console.log("🦕 Static served at http://localhost:3000 🦕");
console.log("----------------------------------------------");
