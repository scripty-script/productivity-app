import { redirect, type MiddlewareFunction } from "react-router";
import { userContext } from "@/src/context";
import { getSession } from "@/src/lib/auth-client";

// Runs before loaders of any route under the auth layout.
// Redirects to the login page when there is no active session.
export const authMiddleware: MiddlewareFunction = async ({ context }) => {
  const { data } = await getSession();
  if (!data?.user) {
    throw redirect("/");
  }
  context.set(userContext, data.user);
};

// Keeps signed-in users out of the login/register pages.
export const guestMiddleware: MiddlewareFunction = async () => {
  const { data } = await getSession();
  if (data?.user) {
    throw redirect("/dashboard");
  }
};
