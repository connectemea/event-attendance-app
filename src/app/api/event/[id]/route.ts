// api/events/[id]/route.ts

import { getSingleEvent, deleteEvent, updateEvent } from '../../controllers/eventsController';
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
    return getSingleEvent(id);
}

// DELETE event
export async function DELETE(request: Request, context: { params: Params }) {
    const id = context.params.id;
    if (!id) {
        return NextResponse.json({ message: "Invalid ID" }, { status: 400 })
    }
    return deleteEvent(id);
}

// Update event
export async function PUT(request: Request, context: { params: Params }) {
    const id = context.params.id;
    if (!id) {
        return NextResponse.json({ message: "Invalid ID" }, { status: 400 })
    }
    return updateEvent(request, id);
}