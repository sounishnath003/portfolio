import { Router } from "express";
import { Skills } from "../../database/schema";
import {
  Next,
  RequestInterface,
  ResponseInterface,
  SkillUtilService,
  SUCCESS,
} from "../utils";

const router = Router();

// [GET]: /api/skills/all
router.get(
  "/all",
  async (req: RequestInterface, res: ResponseInterface, next: Next) => {
    try {
      const skills = await Skills.find({});

      const { skillParentNodes, _orderedSkills } =
        await SkillUtilService.generate_formated_skillSets(skills);

      return res.status(200).send({
        ...SUCCESS,
        message: "all skills are ordered by parent skills",
        data: {
          skillParentNodes: skillParentNodes,
          skillsetsCollections: _orderedSkills,
        },
      });
    } catch (error) {
      next(error);
    }
  }
);

// [POST]: /api/skills/create
interface SkillCreateBodyInterface {
  skill: string;
  parentSkillId: string | null;
}

router.post(
  "/create",
  async (req: RequestInterface, res: ResponseInterface, next: Next) => {
    try {
      const payload: SkillCreateBodyInterface = req.body;

      // create new key for skills as parent node
      const doc = new Skills(payload);
      await doc.save();

      return res.status(200).send({
        ...SUCCESS,
        message: `skills has been added in records`,
        data: doc,
      });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
