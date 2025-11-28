import Layouts from "../../components/Layouts/Layouts";
import Dashboard from "../../pages/admin/Dashboard";
import Home from "../../pages/Home";
import ProductByCategory from "../../pages/ProductByCategory";
import SingleProduct from "../../pages/SingleProduct";

const CommonRouter = [
  {
    element: <Layouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
      {
        path: "/category/:id",
        element: <ProductByCategory />,
      },
    ],
  },
];

export default CommonRouter;
