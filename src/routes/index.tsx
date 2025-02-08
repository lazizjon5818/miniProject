import { useRoutes } from "react-router-dom";
import { SuspenseContainer } from "../config";
import { lazy } from "react";

const SignUp = lazy(() => import("../pages/signUp/Signup"));
const Layout = lazy(() => import("../pages/layout/Layout"));
const Home = lazy(() => import("../pages/home/Home"));
const About = lazy(() => import("../pages/about/About"));
const Contact = lazy(() => import("../pages/contact/Contact"));
const NotFound = lazy(() => import("../pages/not-found/NotFound"));
const Detail = lazy(() => import("../pages/detailPage/Detail"));

function Routers() {
    const routes = useRoutes([
        {
            path: "/",
            element: (
                <SuspenseContainer>
                    <Layout />
                </SuspenseContainer>
            ),
            children: [
                { path: "/", element: <Home /> },
                { path: "/about", element: <About /> },
                { path: "/contact", element: <Contact /> },
                { path: "/detail", element: <Detail/>}
            ],
        },
        {
            path: "/auth/signup",
            element: (
                <SuspenseContainer>
                    <SignUp />
                </SuspenseContainer>
            ),
        },
        {
            path: "*",
            element: (
                <SuspenseContainer>
                    <NotFound />
                </SuspenseContainer>
            ),
        },
    ]);

    return <>{routes}</>;
}

export default Routers;
