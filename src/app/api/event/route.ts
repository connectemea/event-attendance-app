import { NextApiRequest, NextApiResponse } from "next";
import { authMiddleware } from "@/middleware/authMiddleware";
import { getEvents, createEvent } from "../controllers/eventsController";
import { NextRequest, NextResponse } from "next/server";

// GET all events
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  await authMiddleware(req, res, async () => {
    await getEvents(req, res);
  });
}

// Create new event
export async function POST(req: NextRequest, res: NextResponse) {
  await authMiddleware(req, res, async () => {
    await createEvent(req, res);
  });
}
