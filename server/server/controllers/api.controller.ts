import { Router } from "express";
import { Next, RequestInterface, ResponseInterface, SUCCESS } from "../utils";
import ProjectTypeController from "./project-type.controller";

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

// Controllers
router.use("/project-type", ProjectTypeController);

export default router;
