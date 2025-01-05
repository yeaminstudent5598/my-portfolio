import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../MainLayOut/MainLayout";
import Home from "../Home/Home";
import Service from "../pages/Service";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Pages from "../pages/Pages";
import Projects from "../Home/Projects/Projects";
import Education from "../Home/Education/Education";
import Skills from "../Home/Skill/Skills";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
            path: '/',
            element: <Home/>,
        },
        {
            path: '/service',
            element: <Service/>,
        },
        {
            path: '/blog',
            element: <Blog/>,
        },
        {
            path: '/contact',
            element: <Contact/>,
        },
        {
            path: '/pages',
            element: <Pages/>
        },
        {
          path: '/education',
          element: <Education/>,
        },
        {
          path: '/skills',
          element: <Skills/>,
        },
        {
          path: '/projects',
          element: <Projects/>
        }
      ]
    },
  ]);

export default router;