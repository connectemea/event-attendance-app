// import type { NextApiRequest, NextApiResponse } from 'next'
import { getStatus, createStatus } from '../controllers/statusController';
import { NextRequest } from "next/server";


// GET all Status
export async function GET() {
    return getStatus();
}

// Create new Status
export async function POST(request: NextRequest) {
    return createStatus(request);
}


