export class SkillUtilService {
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

    skills.map((__skill) => {
      if (__skill.parentSkillId === null) {
        _orderedSkills[__skill.skill] = [];
      } else {
        const key: string = parentSkill_hashmap[__skill.parentSkillId];
        _orderedSkills[key].push(__skill);
      }
    });

    return { skillParentNodes, _orderedSkills };
  }
}
