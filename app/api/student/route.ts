// import type { NextApiRequest, NextApiResponse } from 'next'
import { getStudents, createStudent } from '../controllers/studentController';
import { NextRequest } from "next/server";


// GET all events
export async function GET() {
    return getStudents();
}

// Create new event
export async function POST(request: NextRequest) {
    return createStudent(request);
}


