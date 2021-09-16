import { Skills } from "../../database/schema";

export interface SkillCreateBodyInterface {
  skill: string;
  parentSkillId: string | null;
}

export class SkillUtilService {
  static async createNewSkillRecord(payload: SkillCreateBodyInterface) {
    // create new key for skills as parent node
    const doc = new Skills(payload);
    await doc.save();
    return doc;
  }

  static async generate_formated_skillSets(skills: any[] = []) {
    const parentSkill_hashmap: any = {};
    const skillParentNodes: any = [];
    Object.entries(skills).map(([_, { _id, skill, parentSkillId }]) => {
      if (parentSkillId === null) {
        skillParentNodes.push({
          _id,
          skill,
        });
        parentSkill_hashmap[_id] = skill;
      }
    });

    let _orderedSkills: any = {};
    const skillsetCollections: any = [];

    skills.map((__skill) => {
      if (__skill.parentSkillId === null) {
        _orderedSkills[__skill.skill] = [];
      } else {
        const key: string = parentSkill_hashmap[__skill.parentSkillId];
        _orderedSkills[key].push(__skill);
      }
    });

    Object.entries(_orderedSkills).map((data) => {
      const [key, relatedSkills] = data;
      skillsetCollections.push({ parentSkill: key, relatedSkills });
    });

    return { skillParentNodes, skillsetCollections };
  }
}
