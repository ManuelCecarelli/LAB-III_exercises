import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/form/Login";
import DashBoard from "./components/dashBoard/DashBoard";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <DashBoard /> },
    { path: "/login", element: <Login /> },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
