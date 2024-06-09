import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from "react";
import Login from "./components/form/Login";
import DashBoard from "./components/dashBoard/DashBoard";
import Protected from "./components/protected/Protected";
import BookDetails from "./components/bookDetails/BookDetails";
import PageNotFound from "./components/pageNotFound/PageNotFound";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);

  const loginHandler = () => {
    if (!isLoggedIn) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Protected isSignedIn={isLoggedIn} />,
      children: [
        {
          path: "/",
          element: <DashBoard onLogout={loginHandler} />,
        },
        { path: "book/:id", element: <BookDetails /> },
      ],
    },
    { path: "/login", element: <Login onLogin={loginHandler} /> },
    { path: "*", element: <PageNotFound /> },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
