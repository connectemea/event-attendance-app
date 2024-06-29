// import type { NextApiRequest, NextApiResponse } from 'next'
import { getCourses, createCourse } from '../controllers/courseController';
import { NextRequest } from "next/server";


// GET all events
export async function GET() {
    return getCourses();
}

// Create new event
export async function POST(request: NextRequest) {
    return createCourse(request);
}


