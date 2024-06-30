// api/events/[id]/route.ts

import { getSingleRole, updateRole, deleteRole } from '../../controllers/roleController';

import { NextResponse } from 'next/server';

type Params = {
    id: string
}

// GET single Role
export async function GET(request: Request, context: { params: Params }) {
    const id = context.params.id;
    if (!id) {
        return NextResponse.json({ message: "Invalid ID" }, { status: 400 })
    }
    return getSingleRole(id);
}

// DELETE Role
export async function DELETE(request: Request, context: { params: Params }) {
    const id = context.params.id;
    if (!id) {
        return NextResponse.json({ message: "Invalid ID" }, { status: 400 })
    }
    return deleteRole(id);
}

// Update Role
export async function PUT(request: Request, context: { params: Params }) {
    const id = context.params.id;
    if (!id) {
        return NextResponse.json({ message: "Invalid ID" }, { status: 400 })
    }
    return updateRole(request, id);
}