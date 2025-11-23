import Layouts from "../../components/Layouts/Layouts";
import Home from "../../pages/Home";

const CommonRouter = [
  {
    element: <Layouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
];

export default CommonRouter;
