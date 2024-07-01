// import type { NextApiRequest, NextApiResponse } from 'next'
import { getClubs , createClub } from '../controllers/clubController';
import { NextRequest } from "next/server";


// GET all clubs
export async function GET() {
    return getClubs();
}

// Create new club
export async function POST(request: NextRequest) {
    return createClub(request);
}


