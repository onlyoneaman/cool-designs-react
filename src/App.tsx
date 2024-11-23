import HomePage from "@/components/HomePage.js";
import {useRoutes} from "react-router-dom";
import Timer from "@/components/Timer/Timer.js";
import CTAButtonsPage from "@/components/CTAButtons/index.js";
import Layout from "@/components/Layout.js";

export default function App() {

  const routes = useRoutes([
    {
      path: "/donothingforaminute",
      element: <Timer/>
    },
    {
      path: "/cta-buttons",
      element: <CTAButtonsPage />
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
