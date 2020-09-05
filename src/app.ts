import { Application } from "./deps.ts";
import { elapsedTime, responseLogger } from "./middleware.ts";
import { router } from "./router.ts";

const app = new Application();

app.use(responseLogger);
app.use(elapsedTime);

app.use(router.routes());
app.use(router.routes());

app.listen({ port: 8080 });
console.log("Server running at http://localhost:8080");
