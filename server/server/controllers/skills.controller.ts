import { Router } from "express";
import { Skills } from "../../database/schema";
import {
  Next,
  RequestInterface,
  ResponseInterface,
  SkillCreateBodyInterface,
  SkillUtilService,
  SUCCESS,
} from "../utils";
import { requiresAuth } from "../utils/requiesauth.middleware";

const router = Router();

// [GET]: /api/skills/all
router.get(
  "/all",
  async (req: RequestInterface, res: ResponseInterface, next: Next) => {
    try {
      const { forcms = false } = req.query;
      const skills = await Skills.find({});
      if (forcms === "true") {
        return res.status(200).send({
          ...SUCCESS,
          message: "Lists of for skills",
          data: { skills },
        });
      } else {
        const { skillParentNodes, skillsetCollections } =
          await SkillUtilService.generate_formated_skillSets(skills);

        return res.status(200).send({
          ...SUCCESS,
          message: "all skills are ordered by parent skills",
          data: {
            skillParentNodes,
            skillsetCollections,
          },
        });
      }
    } catch (error) {
      next(error);
    }
  }
);

// [POST]: /api/skills/create
router.post(
  "/create",
  requiresAuth,
  async (req: RequestInterface, res: ResponseInterface, next: Next) => {
    try {
      const payload: SkillCreateBodyInterface = req.body;

      const doc = await SkillUtilService.createNewSkillRecord(payload);

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

// [DELETE]: /api/skills/delete
router.delete(
  "/delete/:id",
  requiresAuth,
  async (req: RequestInterface, res: ResponseInterface, next: Next) => {
    try {
      const skillId: string = req.params.id;
      await Skills.findByIdAndRemove(skillId);

      return res.status(200).send({
        ...SUCCESS,
        message: `${skillId} has been successfully removed!`,
      });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
