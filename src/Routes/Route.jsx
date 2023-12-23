import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import Development from "../Pages/Services/Development/Development";
import Projects from "../Pages/Project/Projects";
import ContactMe from "../Pages/ContactMe/ContactMe";
import ErrorElement from "../Components/ErrorElement/ErrorElement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/development',
        element: <Development></Development>
      },
      {
        path: '/projects',
        element: <Projects></Projects>
      },
      {
        path: '/contact',
        element: <ContactMe></ContactMe>
      }
    ]
  },
]);

export default router;