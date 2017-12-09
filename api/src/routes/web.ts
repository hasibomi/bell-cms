import {Router} from "express";
import {HomeController} from "../controllers/HomeController";

const router: Router = Router();

router.get("/", HomeController.index);
router.get("/test", HomeController.test);

export const web = router;
