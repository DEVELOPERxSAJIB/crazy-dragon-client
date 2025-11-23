import { createBrowserRouter } from "react-router-dom";
import PublicRouter from "./publicRoute/PublicRouter";
import CommonRouter from "./commonRoute/CommonRouter";
import PrivateRouter from "./privateRoute/PrivateRouter";


const routes = createBrowserRouter([...PublicRouter, ...PrivateRouter, ...CommonRouter]);

export default routes;