// import type { NextApiRequest, NextApiResponse } from 'next'
import { getRoles , createRole } from '../controllers/roleController';
import { NextRequest } from "next/server";


// GET all roles
export async function GET() {
    return getRoles();
}

// Create new Role
export async function POST(request: NextRequest) {
    return createRole(request);
}


