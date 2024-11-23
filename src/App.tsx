import HomePage from "@/components/HomePage.js";
import {useRoutes} from "react-router-dom";
import Timer from "@/components/Timer/Timer.js";

export default function App() {

  return useRoutes([
    {
      path: "/donothingforaminute",
      element: <Timer/>
    },
    {
      element: <HomePage/>,
      path: '*',
    }
  ]);
}
