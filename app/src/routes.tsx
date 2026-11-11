import LoginPage from "@/src/pages/login.tsx";
import { createBrowserRouter } from "react-router";
import GuestLayout from "@/src/layouts/guest.tsx";
import RegisterPage from "@/src/pages/register";
import AuthLayout from "@/src/layouts/auth";
import DashboardPage from "@/src/pages/dashboard";
import { authMiddleware, guestMiddleware } from "@/src/middlewares/auth";
import { userContext } from "@/src/context";
import ProjectIndexPage from "@/src/pages/projects";
import NotFoundPage from "@/src/pages/not-found";

export const router = createBrowserRouter([
  {
    Component: GuestLayout,
    middleware: [guestMiddleware],
    children: [
      { index: true, Component: LoginPage },
      {
        path: "register",
        Component: RegisterPage,
      },
    ],
  },
  {
    id: "auth",
    Component: AuthLayout,
    middleware: [authMiddleware],
    // Expose the user from middleware context to components (see useUser).
    loader: ({ context }) => context.get(userContext),
    children: [
      { path: "dashboard", Component: DashboardPage },
      {
        path: "projects",
        children: [
          {
            index: true,
            Component: ProjectIndexPage,
          },
        ],
      },
    ],
  },
  {
    // Catch-all: any unmatched URL, for guests and signed-in users alike.
    path: "*",
    Component: NotFoundPage,
  },
]);
