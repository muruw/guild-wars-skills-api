import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import {
  allCoreSkills,
  coreElementalistSkills,
  coreMesmerSkills,
  coreMonkSkills,
  coreNecromancerSkills,
  coreRangerSkills,
  coreWarriorSkills,
  Profession,
} from "./skills.ts";

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
      } else if (profession === "monk") {
        context.response.body = coreMonkSkills;
      } else if (profession === "elementalist") {
        context.response.body = coreElementalistSkills;
      } else if (profession === "necromancer") {
        context.response.body = coreNecromancerSkills;
      } else if (profession === "mesmer") {
        context.response.body = coreMesmerSkills;
      } else {
        context.response.body = `No skills found for {profession}`;
        context.response.status = 400;
      }
    }
  })
  .get("/api/name/:name", (context) => {
    if (context?.params?.name) {
      const found = allCoreSkills.find((skill) =>
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
