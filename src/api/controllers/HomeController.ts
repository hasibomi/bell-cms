import {Request, Response} from "express";
import {Controller} from "./Controller";

export class HomeController extends Controller {
    /**
     * Testing method.
     *
     * @param {e.Request} req
     * @param {Response} res
     */
    public sayHi(req: Request, res: Response): void {
        res.sendFile(super.view("index"));
    }
}
