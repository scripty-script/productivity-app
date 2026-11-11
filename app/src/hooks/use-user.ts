import { useRouteLoaderData } from "react-router";
import type { User } from "@/src/types";

// Returns the authenticated user set by authMiddleware.
// Only usable inside routes nested under the "auth" route.
export function useUser(): User {
  const user = useRouteLoaderData<User>("auth");
  if (!user) {
    throw new Error("useUser must be used inside the auth layout");
  }
  return user;
}
