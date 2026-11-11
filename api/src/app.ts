import express, { type Express, type Request, type Response } from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.ts";
import { requireAuth } from "./middlewares/auth.ts";

const app: Express = express();
const port = 8000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.all("/api/auth/{*any}", toNodeHandler(auth));

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World!");
});

// Example protected route
app.get("/api/me", requireAuth, (_req: Request, res: Response) => {
  res.json(res.locals.user);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
