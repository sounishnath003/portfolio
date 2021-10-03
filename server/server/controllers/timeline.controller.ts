import { Router } from "express";
import { Timeline } from "../../database/schema";
import { Next, RequestInterface, ResponseInterface, SUCCESS } from "../utils";
import { requiresAuth } from "../utils/requiesauth.middleware";

const router = Router();

// [GET]: /api/timelines/all
router.get(
  "/all",
  async (req: RequestInterface, res: ResponseInterface, next: Next) => {
    try {
      const timelines = await Timeline.find({});

      return res.status(200).send({
        ...SUCCESS,
        message: "lists of all timelines",
        data: timelines,
      });
    } catch (error) {
      next(error);
    }
  }
);

// [POST]: /api/timelines/create
interface TimeLineCreateDto {
  location: string;
  roleOffered: string;
  organization: string;
  timeDuration: string;
  workDescription: string;
}

router.post(
  "/create",
  requiresAuth,
  async (req: RequestInterface, res: ResponseInterface, next: Next) => {
    try {
      const payload = req.body as TimeLineCreateDto;
      const doc = new Timeline(payload);
      await doc.save();

      return res.status(200).send({
        ...SUCCESS,
        message: `New Timeline has been created!`,
        data: doc,
      });
    } catch (error) {
      next(error);
    }
  }
);

// [PATCH]: /api/timelines/update?id=eqe312315389sf
router.patch(
  "/update",
  requiresAuth,
  async (req: RequestInterface, res: ResponseInterface, next: Next) => {
    try {
      const timelineId = req.query["id"];
      const payload = req.body;
      const doc = await Timeline.updateOne({ _id: timelineId }, payload);

      if (doc === null) throw new Error("No Timelines found with that id");

      return res.status(200).send({
        ...SUCCESS,
        message: "Details for the timeline has been successfully updated!",
      });
    } catch (error) {
      next(error);
    }
  }
);

// [DELETE]: /api/timelines/delete?id=3e893dj0233d32
router.delete(
  `/delete`,
  requiresAuth,
  async (req: RequestInterface, res: ResponseInterface, next: Next) => {
    try {
      const pid = req.query.id;
      const doc = await Timeline.findByIdAndRemove(pid);

      return res
        .status(200)
        .send({ ...SUCCESS, message: "Project deleted successfully" });
    } catch (e) {
      next(e);
    }
  }
);

export default router;
