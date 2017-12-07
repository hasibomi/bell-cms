import {Request, Response} from "express";

class HomeCtrl {
    /**
     * Testing method.
     *
     * @param {e.Request} req
     * @param {Response} res
     */
    public index(req: Request, res: Response): object {
        return res.status(200).json({"status": "OK", "message": "Welcome to Bell CMS"});
    }
}

export const HomeController = new HomeCtrl;
