import * as http from "http";
import {Bootstrap} from "./bootstrap";
import {Request, Response} from "express";

const bootstrap: Bootstrap = new Bootstrap();

const server = http.createServer(bootstrap.app).listen(process.env.PORT || 3000, (req: Request, res: Response) => {
    console.log(`Server is listening on port ${server.address().port}`);
});
