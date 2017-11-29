import * as express from "express";
import * as http from "http";
import * as dotenv from "dotenv";

const app = express();
const server = http.createServer(app);
dotenv.config();

const listener = server.listen(process.env.PORT || 3000, (req: Request, res: Response) => {
    console.log(`Server is listening on port ${listener.address().port}`);
});
