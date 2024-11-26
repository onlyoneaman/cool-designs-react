import HomePage from "@/components/HomePage.js";
import {useRoutes} from "react-router-dom";
import Timer from "@/components/Timer/Timer.js";
import CTAButtonsPage from "@/components/CTAButtons/index.js";
import Layout from "@/components/Layout.js";
import AnimatedScrollPage from "@/components/AnimatedScrollPage/index.js";
import paths from "@/constants/paths.js";
import TaggingPage from "@/components/TaggingPage/index.js";
import TabsContent from "@/components/TabsContent/index.js";
import UnblurHeadingPage from "@/components/UnblurHeadingPage/index.js";
import FloatingWidget from "@/components/FloatingWidget.js";
import {useGlobalContext} from "@/context/GlobalContext.js";
import ImpossibleCheckbox from "@/components/ImpossibleCheckbox/index.js";
import MotionSidebar from "@/components/MotionSidebar/index.js";

export default function App() {
  const { isFullScreen } = useGlobalContext();

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
      path: paths.tabsContent,
      element: <TabsContent />
    },
    {
      path: paths.UnblurHeading,
      element: <UnblurHeadingPage />
    },
    {
      path: paths.ImpossibleCheckbox,
      element: <ImpossibleCheckbox />
    },
    {
      path: paths.MotionSidebar,
      element: <MotionSidebar />
    },
    {
      element: <HomePage/>,
      path: '*',
    }
  ]);

  if(isFullScreen) {
    return (
      <>
        {routes}
        <FloatingWidget />
      </>
    )
  }

  return(
    <Layout>
      {routes}
    </Layout>
  );
}
