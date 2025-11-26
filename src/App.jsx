import { RouterProvider } from "react-router-dom";
import routes from "./routes/route";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
