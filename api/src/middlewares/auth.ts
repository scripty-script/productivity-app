import type { NextFunction, Request, Response } from "express";
import { fromNodeHeaders } from "better-auth/node";
import { auth } from "../lib/auth.ts";

type Session = typeof auth.$Infer.Session;

declare global {
  namespace Express {
    interface Locals {
      user: Session["user"];
      session: Session["session"];
    }
  }
}

// Protects API routes: responds 401 unless the request has a valid session cookie.
export async function requireAuth(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });

  if (!session) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  res.locals.user = session.user;
  res.locals.session = session.session;
  next();
}
