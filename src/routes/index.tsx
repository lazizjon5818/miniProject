import { useRoutes } from "react-router-dom";
import { SuspenseContainer } from "../config";
import { lazy } from "react";
// import ProtectedRoute from "../pages/login/checkLogin"; 

const LoginPage = lazy(() => import("../pages/login/LoginPage"));
const Layout = lazy(() => import("../pages/layout/Layout"));
const Home = lazy(() => import("../pages/home/Home"));
const About = lazy(() => import("../pages/about/About"));
const Contact = lazy(() => import("../pages/contact/Contact"));
const NotFound = lazy(() => import("../pages/not-found/NotFound"));
const Detail = lazy(() => import("../pages/detailPage/Detail"));
const AccountPage = lazy(() => import("../pages/accaunt/AccauntPage"));
const Wishlist = lazy(() => import("../pages/wishlist/WishlistPage"));

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
        { path: "/", element: <SuspenseContainer><Home /></SuspenseContainer> },
        { path: "/about", element: <SuspenseContainer><About /></SuspenseContainer> },
        { path: "/contact", element: <SuspenseContainer><Contact /></SuspenseContainer> },
        { path: "/product/:id", element: <SuspenseContainer><Detail /></SuspenseContainer> },
        { path: "/wishlist", element: <SuspenseContainer><Wishlist /></SuspenseContainer> },
        {
          path: "/account",
          element: (
              <SuspenseContainer>
                <AccountPage />
              </SuspenseContainer>
          ),
        },
      ],
    },

    {
      path: "/auth/login",
      element: (
        <SuspenseContainer>
          <LoginPage />
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
