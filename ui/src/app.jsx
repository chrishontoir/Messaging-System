import { Application, React, ReactDOMServer } from "../deps.ts";
import { App } from "./components/App.jsx";

const app = new Application();

app.use(async (ctx) => {
  ctx.response.body = `
        <!DOCTYPE html>
        <html>
            <body>
                <div id='root'>${ReactDOMServer.renderToString(<App />)}</div>
            </body>
        </html>
    `;
});

app.listen({ port: 3000 });
console.log("🦕 Static served at http://localhost:3000 🦕");
console.log("---------------------------------------------");
