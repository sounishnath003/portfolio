import {Router} from "express";
import {Project} from "../../database/schema";
import {Next, RequestInterface, ResponseInterface, SUCCESS} from "../utils";

const router = Router();

// [GET]: Top 4 Projects
router.get(
    "/top-4",
    async (req: RequestInterface, res: ResponseInterface, next: Next) => {
        try {
            const projects = await Project.find({});

            return res.status(200).send({
                ...SUCCESS,
                data: projects,
            });
        } catch (e) {
            next(e);
        }
    }
);

// [POST]: Create new Project
router.post(
    "/create",
    async (req: RequestInterface, res: ResponseInterface, next: Next) => {
        try {
            const payload = req.body;
            await (await Project.create(payload)).save();

            return res.status(200).send({
                ...SUCCESS,
                message: "New project has been created!",
            });
        } catch (e) {
            next(e);
        }
    }
);

// [PUT]: Update project data
router.put(
    "/update/:id",
    async (req: RequestInterface, res: ResponseInterface, next: Next) => {
        try {
            const pid: string = req.params.id;
            const payload = req.body;

            const doc = await Project.updateOne({_id: pid}, payload);
            if (doc == null) throw new Error("Project details cannot be updated!");

            return res.status(200).send({
                ...SUCCESS,
                message: "Project details has been updated!",
            });
        } catch (e) {
            next(e);
        }
    }
);

// [DELETE]: Delete project by id
router.delete(`/delete/:id`, async (req: RequestInterface, res: ResponseInterface, next: Next) => {
    try {
        const pid: string = req.params.id;
        const doc = await Project.findByIdAndRemove(pid);

        return res
            .status(200)
            .send({...SUCCESS, message: "Project deleted successfully"});
    } catch (e) {
        next(e);
    }
})

export default router;
