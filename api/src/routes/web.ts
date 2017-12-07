import {Router} from "express";
import {HomeController} from "../controllers/HomeController";

const router: Router = Router();

router.get("/", HomeController.index);

export const web = router;
