import core_warrior_json from "./skills/core_warrior.json" assert {
  type: "json",
};
import core_ranger_json from "./skills/core_ranger.json" assert {
  type: "json",
};
import core_monk_json from "./skills/core_monk.json" assert { type: "json" };
import core_elementalist_json from "./skills/core_elementalist.json" assert {
  type: "json",
};
import core_necromancer_json from "./skills/core_necromancer.json" assert {
  type: "json",
};
import core_mesmer_json from "./skills/core_mesmer.json" assert {
  type: "json",
};

export type Profession = "warrior" | "ranger" | "monk";

interface Skill {
  wiki_url: string;
  name: string;
  description: string;
  skill_id: string;
  image_url: string;
  energy?: string;
  recharge?: string;
  upkeep?: string;
  overcast?: string;
  sacrifice?: string;
  profession: Profession;
  attribute: string;
  skill_type: string;
  campaign: string;
}

const coreWarriorSkills: Skill[] = core_warrior_json as Skill[];
const coreRangerSkills: Skill[] = core_ranger_json as Skill[];
const coreMonkSkills: Skill[] = core_monk_json as Skill[];
const coreElementalistSkills: Skill[] = core_elementalist_json as Skill[];
const coreNecromancerSkills: Skill[] = core_necromancer_json as Skill[];
const coreMesmerSkills: Skill[] = core_mesmer_json as Skill[];
const allCoreSkills = coreWarriorSkills
  .concat(coreRangerSkills)
  .concat(coreMonkSkills)
  .concat(coreElementalistSkills)
  .concat(coreNecromancerSkills)
  .concat(coreMesmerSkills);

export {
  allCoreSkills,
  coreElementalistSkills,
  coreMesmerSkills,
  coreMonkSkills,
  coreNecromancerSkills,
  coreRangerSkills,
  coreWarriorSkills,
};
