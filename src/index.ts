import * as http from "http";
import {Bootstrap} from "./core/bootstrap";

const bootstrap = new Bootstrap();
const server = http.createServer(bootstrap.app);

const listener = server.listen(process.env.PORT || 3000, (req: Request, res: Response) => {
    console.log(`Server is listening on port ${listener.address().port}`);
});
