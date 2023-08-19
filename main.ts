import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import { coreWarriorSkills, coreRangerSkills, Profession } from "./skills.ts";

const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Welcome to Guild Wars skills API!";
  })
  .get("/api/profession/:profession", (context) => {
    if (context?.params?.profession) {
      const profession = context.params.profession as Profession;
      if (profession === "warrior") {
        context.response.body = coreWarriorSkills;
      } else if (profession === "ranger") {
        context.response.body = coreRangerSkills;
      } else {
        context.response.body = `No skills found for {profession}`;
        context.response.status = 400;
      }
    }
  })
  .get("/api/name/:name", (context) => {
    if (context?.params?.name) {
      const skills = coreWarriorSkills.concat(coreRangerSkills);
      const found = skills.find((skill) =>
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
