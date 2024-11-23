import HomePage from "@/components/HomePage.js";
import {useRoutes} from "react-router-dom";
import Timer from "@/components/Timer/Timer.js";
import CTAButtonsPage from "@/components/CTAButtons/index.js";

export default function App() {

  return useRoutes([
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
}
