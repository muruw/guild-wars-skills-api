import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import coreWarriorSkills from "./skills.ts";

const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Welcome to Guild Wars skills API!";
  })
  .get("/api", (context) => {
    context.response.body = coreWarriorSkills;
  })
  .get("/api/:name", (context) => {
    if (context?.params?.name) {
      const found = coreWarriorSkills.find((skill) =>
        skill.name.toLowerCase() === context.params.name.toLowerCase()
      );
      if (found) {
        context.response.body = found;
      } else {
        context.response.body = "No skill found.";
      }
    }
  });

const app = new Application();
app.use(oakCors()); // Enable CORS for All Routes
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
