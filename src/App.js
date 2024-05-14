import Header from "./Header";
import './App.css'
import Hero from "./Hero";
import Skills from "./Skills";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Project from "./Project";
import Static from "./Static";
import Certification from "./Certification";
import Footer from "./Footer";
import { lazy, Suspense } from "react";
import ProjectsTab from "./ProjectsTab";
import Experience from "./Experience";

//lazyLoading
const Javascript = lazy(() => import('./Javascript'))

const ReactProject = lazy(() => import('./ReactProject'))

const FullStack = lazy(() => import('./FullStack'))



function App() {
  return (
    <div>
      <div className="p-4 flex flex-col">

        <div className="">
          {/* https://www.flaticon.com/ */}
          <Header />
          <Hero />
        </div>

        <Skills />

        <Experience />

        <ProjectsTab />

        {/* <RouterProvider router={appRoute} /> */}

        <Certification />

      </div>
      <Footer />
    </div>
  );
}

const appRoute = createBrowserRouter([
  {
    path: '/',
    element: <Project />,
    children: [
      {
        path: '/',
        element: <Static />
      },
      {
        path: 'project/javascript',
        element:
          <Suspense fallback={<h1 className="font-sans text-center text-2xl font-semibold">loading...</h1>}>
            <Javascript />
          </Suspense>
      },
      {
        path: 'project/react',
        element:
          <Suspense fallback={<h1 className="font-sans text-center text-2xl font-semibold">loading...</h1>}>
            <ReactProject />
          </Suspense>
      },
      {
        path: 'project/fullstack',
        element:
          <Suspense fallback={<h1 className="font-sans text-center text-2xl font-semibold">loading...</h1>}>
            <FullStack />
          </Suspense>
      },
    ]
  }
])


export default App;
