// api/events/[id]/route.ts

import { getSingleStudent, updateStudent, deleteStudent } from '../../controllers/studentController';
import { NextResponse } from 'next/server';

type Params = {
    id: string
}

// GET single event
export async function GET(request: Request, context: { params: Params }) {
    const id = context.params.id;
    if (!id) {
        return NextResponse.json({ message: "Invalid ID" }, { status: 400 })
    }
    return getSingleStudent(id);
}

// DELETE event
export async function DELETE(request: Request, context: { params: Params }) {
    const id = context.params.id;
    if (!id) {
        return NextResponse.json({ message: "Invalid ID" }, { status: 400 })
    }
    return deleteStudent(id);
}

// Update event
export async function PUT(request: Request, context: { params: Params }) {
    const id = context.params.id;
    if (!id) {
        return NextResponse.json({ message: "Invalid ID" }, { status: 400 })
    }
    return updateStudent(request, id);
}