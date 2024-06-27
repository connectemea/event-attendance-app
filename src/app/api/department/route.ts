// import type { NextApiRequest, NextApiResponse } from 'next'
import { getDepartment, createDepartment } from '../controllers/departmentController';
import { NextRequest } from "next/server";


// GET all events
export async function GET() {
    return getDepartment();
}

// Create new event
export async function POST(request: NextRequest) {
    return createDepartment(request);
}


