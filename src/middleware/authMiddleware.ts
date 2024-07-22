import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

export async function authMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  next: Function,
) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // Attach user to the request object
  (req as any).user = session.user;
  next();
}
