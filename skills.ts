import coreWarriorSkills from "./skills/core_warrior.json" assert { type: "json" };

interface Skill {
    wiki_url: string,
    name: string,
    description: string,
    skill_id: string,
    image_url: string,
    energy?: string,
    recharge?: string,
    profession: string,
    attribute: string,
    skill_type: string,
    campaign: string,
}

export default coreWarriorSkills as Skill[];