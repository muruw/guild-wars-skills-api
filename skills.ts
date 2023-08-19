import core_warrior_json from "./skills/core_warrior.json" assert { type: "json" };
import core_ranger_json from "./skills/core_ranger.json" assert { type: "json" };

export type Profession = "warrior" | "ranger";

interface Skill {
    wiki_url: string,
    name: string,
    description: string,
    skill_id: string,
    image_url: string,
    energy?: string,
    recharge?: string,
    profession: Profession,
    attribute: string,
    skill_type: string,
    campaign: string,
}

const coreWarriorSkills: Skill[] = core_warrior_json as Skill[];
const coreRangerSkills: Skill[] = core_ranger_json as Skill[];

export { coreWarriorSkills, coreRangerSkills };