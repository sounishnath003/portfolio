export class SkillUtilService {
  static async generate_formated_skillSets(skills: any[] = []) {
    /**
     * data: [
     *  {
     *      _id: 1,
     *      skill: 'frontend',
     *      parentSkillId: null,
     *  },
     *  {
     *      _id: 2,
     *      skill: 'javascript',
     *      parentSkillId: 1,
     *  },
     *  {
     *      _id: 3,
     *      skill: 'html',
     *      parentSkillId: 1,
     *  },
     * ]
     */

    const parentSkill_hashmap: any = {};
    Object.entries(skills).map(([_, { _id, skill, parentSkillId }]) => {
      if (parentSkillId === null) parentSkill_hashmap[_id] = skill;
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

    return _orderedSkills;
  }
}
