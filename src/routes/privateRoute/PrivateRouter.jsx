import Layouts from "../../components/Layouts/Layouts";
import ChangePassword from "../../pages/user/ChangePassword";
import EditProfile from "../../pages/user/EditProfile";
import Profile from "../../pages/user/Profile";
import PrivateGuard from "./PrivateGuard";

const PrivateRouter = [
  {
    element: <Layouts />,
    children: [
      {
        element: <PrivateGuard />,
        children: [
          {
            path: "/orders",
            element: <div>Orders Page</div>,
          },
          {
            path: "/profile",
            element: <Profile />,
          },
          {
            path: "/edit-profile",
            element: <EditProfile />,
          },
          {
            path: "/change-password",
            element: <ChangePassword />,
          },
        ],
      },
    ],
  },
];

export default PrivateRouter;