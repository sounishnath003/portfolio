import { Router } from "express";
import {
  generate_api_key,
  Next,
  RequestInterface,
  ResponseInterface,
  SUCCESS,
} from "../utils";
import ProjectTypeController from "./project-type.controller";
import ProjectsController from "./projects.controller";
import SkillsController from "./skills.controller";
import TimelineController from "./timeline.controller";

const router = Router();

router.get(
  "/data",
  async (req: RequestInterface, res: ResponseInterface, next: Next) => {
    try {
      return res.status(200).send({
        ...SUCCESS,
        msg: "server is running",
        ip: req.ip,
        timestamp: Date.now(),
      });
    } catch (error) {
      next(error);
    }
    next();
  }
);

// [POST]: /api/auth?payload=<something-secret>
router.get(
  "/auth",
  async (req: RequestInterface, res: ResponseInterface, next: Next) => {
    try {
      const { payload = "" } = req.query;

      const apiKey = await generate_api_key(
        Buffer.from(payload as any, "base64").toString() // mimic atob
      );
      return res.status(200).send({
        ...SUCCESS,
        message: "x-api-activated",
        apiKey,
      });
    } catch (error) {
      next(error);
    }
  }
);

// Controllers
router.use("/project-type", ProjectTypeController);
router.use("/projects", ProjectsController);
router.use("/skills", SkillsController);
router.use("/timelines", TimelineController);

export default router;
