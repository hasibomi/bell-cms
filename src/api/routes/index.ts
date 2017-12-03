import {Router} from "express";
import {HomeController} from "../controllers/HomeController";

const router: Router = Router();
const home: HomeController = new HomeController;

router.get("/", home.sayHi);

export = router;
