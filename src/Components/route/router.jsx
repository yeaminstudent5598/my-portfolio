import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayOut/MainLayout";
import Home from "../Home/Home";
import Service from "../pages/Service";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Pages from "../pages/Pages";
import Projects from "../Home/Projects/Projects";
import Skills from "../Home/Skill/Skills";
import ProjectDetails from "../Home/Projects/ProjectDetails";
// Education কম্পোনেন্ট যদি পরে দরকার হয়, তখন রাউট অ্যাড করে নিতে পারবেন
// import Education from "../Home/Education/Education";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/service',
        element: <Service />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/pages',
        element: <Pages />
      },
      {
        path: '/skills',
        element: <Skills />,
      },
      {
        path: '/projects',
        element: <Projects />
      },
      // এই পাথটি ডাইনামিক করা হলো, যাতে /project/guptodhan বা /project/outreach-ai সব কাজ করে
      {
        path: '/project/:id',
        element: <ProjectDetails />
      },
    ]
  },
]);

export default router;