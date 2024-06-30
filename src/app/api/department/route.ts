// import type { NextApiRequest, NextApiResponse } from 'next'
import { getDepartment, createDepartment } from '../controllers/departmentController';
import { NextRequest } from "next/server";


// GET all departments
export async function GET() {
    return getDepartment();
}

// Create new department
export async function POST(request: NextRequest) {
    return createDepartment(request);
}