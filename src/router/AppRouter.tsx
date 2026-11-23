import { createBrowserRouter, RouterProvider } from "react-router";
import { lazy, Suspense } from "react";
import HomeLayout from "../layouts/HomeLayout";
import ComponentLayout from "../layouts/ComponentLayout";
import ButtonPage from "../pages/components/ButtonPage";
import CardPage from "@/pages/components/CardPage";
import ModalPage from "@/pages/components/ModalPage";
import InputPage from "@/pages/components/InputPage";
import NavbarPage from "@/pages/components/NavbarPage";
import ToolTip from "@/pages/components/ToolTipPage";

//----------------------------UPCOMING COMPONENTS----------------------------------
// import LayoutPage from "@/pages/components/LayoutPage";
// import CarouselPage from "@/pages/components/CarouselPage";
import AboutSkeleton from "@/demo/Loading/AboutSkeleton";
import TemplateSkeleton from "@/demo/Loading/TemplateSkeleton";
import HomeSkeleton from "@/demo/Loading/HomeSkeleton";
import ComingSoon from "@/pages/components/ComingSoon";
const HomePage = lazy(() => import("../pages/HomePage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const TemplatePage = lazy(() => import("@/pages/Templates"));

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<HomeSkeleton />}>
              <HomePage />
            </Suspense>
          ),
        },
        {
          path: "components",
          element: <ComponentLayout />,
          children: [
            {
              path: "buttons",
              element: <ButtonPage />,
            },
            {
              path: "card",
              element: <CardPage />,
            },
            {
              path: "modal",
              element: <ModalPage />,
            },
            {
              path: "input",
              element: <InputPage />,
            },
            {
              path: "navbar",
              element: <NavbarPage />,
            },
            {
              path: "tooltip",
              element: <ToolTip />,
            },
            {
              path: "layout",
              element: <ComingSoon/>,
            },
            {
              path: "carousel",
              element: <ComingSoon />,
            },
          ],
        },
        {
          path: "templates",
          element: (
            <Suspense fallback={<TemplateSkeleton />}>
              <TemplatePage />
            </Suspense>
          ),
        },
        {
          path: "about",
          element: (
            <Suspense fallback={<AboutSkeleton />}>
              <AboutPage />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
