import { Router } from "express";
import { Skills } from "../../database/schema";
import { Next, RequestInterface, ResponseInterface, SUCCESS } from "../utils";
import { SkillUtilService } from "../utils/skill.utils";

const router = Router();

// [GET]: /api/skills/all
router.get(
  "/all",
  async (req: RequestInterface, res: ResponseInterface, next: Next) => {
    try {
      const skills = await Skills.find({});

      const _orderedSkills =
        await SkillUtilService.generate_formated_skillSets(skills);

      return res.status(200).send({
        ...SUCCESS,
        message: "all skills are ordered by parent skills",
        data: _orderedSkills,
      });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
