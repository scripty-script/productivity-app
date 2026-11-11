import { createContext } from "react-router";
import type { User } from "@/src/types";

export const userContext = createContext<User | null>(null);
