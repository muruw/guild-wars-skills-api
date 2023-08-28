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
  Skill,
} from "./skills.ts";

const router = new Router();

const skillsMap: Record<Profession, Skill[]> = {
  warrior: coreWarriorSkills,
  mesmer: coreMesmerSkills,
  monk: coreMonkSkills,
  ranger: coreRangerSkills,
  elementalist: coreElementalistSkills,
  necromancer: coreNecromancerSkills,
};

router
  .get("/", (context) => {
    context.response.body = "Welcome to Guild Wars skills API!";
  })
  .get("/api/profession/:profession", (context) => {
    const profession = context?.params?.profession as Profession;
    const skills = skillsMap[profession];

    if (skills) {
      context.response.body = skills;
    } else {
      context.response.body = `No skills found for ${profession}`;
      context.response.status = 400;
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
