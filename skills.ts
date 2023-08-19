import core_warrior_json from "./skills/core_warrior.json" assert { type: "json" };
import core_ranger_json from "./skills/core_ranger.json" assert { type: "json" };
import core_monk_json from "./skills/core_monk.json" assert { type: "json" };

export type Profession = "warrior" | "ranger" | "monk";

interface Skill {
    wiki_url: string,
    name: string,
    description: string,
    skill_id: string,
    image_url: string,
    energy?: string,
    recharge?: string,
    upkeep?: string,
    profession: Profession,
    attribute: string,
    skill_type: string,
    campaign: string,
}

const coreWarriorSkills: Skill[] = core_warrior_json as Skill[];
const coreRangerSkills: Skill[] = core_ranger_json as Skill[];
const coreMonkSkills: Skill[] = core_monk_json as Skill[];
const allCoreSkills = coreWarriorSkills.concat(coreRangerSkills).concat(coreMonkSkills);

export { coreWarriorSkills, coreRangerSkills, coreMonkSkills, allCoreSkills };