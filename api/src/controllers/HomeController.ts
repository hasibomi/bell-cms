import {Request, Response} from "express";

import {User} from "../models/User";

class Home {
    /**
     * Testing method.
     *
     * @param {e.Request} req
     * @param {Response} res
     */
    public index(req: Request, res: Response): object {
        return res.status(200).json({"status": "OK", "message": "Welcome to Bell CMS"});
    }

    public test(req: Request, res: Response) {
        User.select("id, email, username").getOne((error: any, results: Array<object>) => {
            if (error) return res.status(500).json({"status": "error", "results": error.sqlMessage});
            return res.status(200).json({"status": "OK", "results": results});
        });
    }
}

export const HomeController = new Home;
