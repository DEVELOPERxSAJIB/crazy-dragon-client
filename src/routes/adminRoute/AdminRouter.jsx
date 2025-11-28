import Dashboard from "../../pages/admin/Dashboard";
import AdminGuard from "./AdminGuard";

const AdminRouter = [
  {
    element: <AdminGuard />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
];

export default AdminRouter;
