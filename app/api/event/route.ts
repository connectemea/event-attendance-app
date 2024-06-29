// import type { NextApiRequest, NextApiResponse } from 'next'
import { getEvents, createEvent } from '../controllers/eventsController';
import { NextRequest } from "next/server";


// GET all events
export async function GET() {
    return getEvents();
}

// Create new event
export async function POST(request: NextRequest) {
    return createEvent(request);
}


