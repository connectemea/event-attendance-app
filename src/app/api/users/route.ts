// import type { NextApiRequest, NextApiResponse } from 'next'
import { getUsers } from '../controllers/usersController';


// GET all students
export async function GET() {
    return getUsers();
}
