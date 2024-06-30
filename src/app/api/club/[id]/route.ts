// api/club/[id]/route.ts

import { getSingleClub, updateClub, deleteClub } from '../../controllers/clubController';
import { NextResponse } from 'next/server';

type Params = {
    id: string
}

// GET single club
export async function GET(request: Request, context: { params: Params }) {
    const id = context.params.id;
    if (!id) {
        return NextResponse.json({ message: "Invalid ID" }, { status: 400 })
    }
    return getSingleClub(id);
}

// DELETE club
export async function DELETE(request: Request, context: { params: Params }) {
    const id = context.params.id;
    if (!id) {
        return NextResponse.json({ message: "Invalid ID" }, { status: 400 })
    }
    return deleteClub(id);
}

// Update club
export async function PUT(request: Request, context: { params: Params }) {
    const id = context.params.id;
    if (!id) {
        return NextResponse.json({ message: "Invalid ID" }, { status: 400 })
    }
    return updateClub(request, id);
}