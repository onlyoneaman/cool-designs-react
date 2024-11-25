import HomePage from "@/components/HomePage.js";
import {useRoutes} from "react-router-dom";
import Timer from "@/components/Timer/Timer.js";
import CTAButtonsPage from "@/components/CTAButtons/index.js";
import Layout from "@/components/Layout.js";
import AnimatedScrollPage from "@/components/AnimatedScrollPage/index.js";
import paths from "@/constants/paths.js";
import TaggingPage from "@/components/TaggingPage/index.js";

export default function App() {

  const routes = useRoutes([
    {
      path: paths.Donothingforaminute,
      element: <Timer/>
    },
    {
      path: paths.CTA_BUTTONS,
      element: <CTAButtonsPage />
    },
    {
      path: paths.AnimatedScrollPage,
      element: <AnimatedScrollPage />
    },
    {
      path: paths.tagging,
      element: <TaggingPage />
    },
    {
      element: <HomePage/>,
      path: '*',
    }
  ]);

  return(
    <Layout>
      {routes}
    </Layout>
  );
}
