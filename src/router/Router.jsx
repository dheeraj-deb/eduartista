import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/menuPage/Menu";
import Signup from "../components/Signup";
import Order from "../pages/dashboard/Order";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UserProfile from "../pages/dashboard/UserProfile";
import CartPage from "../pages/menuPage/CartPage";
import Login from "../components/Login";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/dashboard/admin/Dashboard";
import Users from "../pages/dashboard/admin/Users";
import AddMenu from "../pages/dashboard/admin/AddMenu";
import ManageItems from "../pages/dashboard/admin/ManageItems";
import UpdateMenu from "../pages/dashboard/admin/UpdateMenu";
import Payment from "../pages/menuPage/Payment";
import AboutUs from "../pages/Other/AboutUs";
import ContactUs from "../pages/Other/ContactUs";
import ManageBooking from "../pages/dashboard/admin/ManageBooking";
import Affiliate from "../pages/Affiliate";
import Product_Base from "../pages/productListing";
import ProductDetails from "../pages/product/indext";
import AgentSignup from "../components/AgentSignup";
import Subscription from "../pages/Subscription";
import AgentTable from "../pages/admin/agent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/subscription",
        element: <Subscription />,
      },
      // {
      //   path: "/menu",
      //   element: <Menu />,
      // },
      {
        path: "/product",
        element: <ProductDetails />,
      },
      {
        path: "/affiliate",
        element: <Affiliate />,
      },
      {
        path: "product-listing",
        element: <Product_Base />,
      },
      // {
      //   path: "/order",
      //   element: (
      //     <PrivateRoute>
      //       <Order />
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: "/update-profile",
        element: <UserProfile />,
      },
      {
        path: "/cart-page",
        element: <CartPage />,
      },
      {
        path: "/process-checkout",
        element: <Payment />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "/admin",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "agent",
        element: <AgentTable />,
      },
      {
        path: "user",
        element: <Users />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/agent-signup",
    element: <AgentSignup />,
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "add-menu",
        element: <AddMenu />,
      },
      {
        path: "manage-items",
        element: <ManageItems />,
      },
      {
        path: "update-menu/:id",
        element: <UpdateMenu />,
        loader: ({ params }) =>
          fetch(`http://localhost:6001/menu/${params.id}`),
      },
      {
        path: "manage-booking",
        element: <ManageBooking />,
      },
    ],
  },
]);

export default router;
