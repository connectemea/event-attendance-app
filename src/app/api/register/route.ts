import { createUser } from "../controllers/usersController";
import { NextRequest } from "next/server";


export async function POST(request: NextRequest) {
    return createUser(request);
}