import { Router } from "express";
import { ProjectType } from "../../database/schema";
import { Next, RequestInterface, ResponseInterface, SUCCESS } from "../utils";

const router = Router();

// [GET] /api/project-type/all
router.get(
  "/all",
  async (req: RequestInterface, res: ResponseInterface, next: Next) => {
    try {
      const projectTypes = await ProjectType.find();

      return res.status(200).send({
        ...SUCCESS,
        data: projectTypes,
      });
    } catch (error) {
      next(error);
    }
  }
);

// [POST] /api/project-type/create
router.post(
  "/create",
  async (req: RequestInterface, res: ResponseInterface, next: Next) => {
    try {
      const payload = req.body;
      const doc = new ProjectType(payload);
      await doc.save();

      return res
        .status(200)
        .send({ ...SUCCESS, message: "Project type created." });
    } catch (error) {
      next(error);
    }
  }
);

// [PUT] /api/project-type/update/:id
router.put(
  "/update",
  async (req: RequestInterface, res: ResponseInterface, next: Next) => {
    try {
      const projectId = req.params.id;
      const payload = req.body; // {id: 1, name: 'test'}
      const doc = await ProjectType.findByIdAndUpdate(projectId, {
        $set: payload,
      });
      await doc?.save();

      return res
        .status(200)
        .send({ ...SUCCESS, message: "Project Type updated" });
    } catch (error) {
      next(error);
    }
  }
);

// [DETELE]: /api/project-type/delete/:id
router.delete(
  "delete/:id",
  async (req: RequestInterface, res: ResponseInterface, next: Next) => {
    try {
      const projectId = req.params.id;
      const doc = await ProjectType.findByIdAndRemove(projectId);
      await doc?.save();

      return res
        .status(200)
        .send({ ...SUCCESS, message: "Project Type deleted" });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
