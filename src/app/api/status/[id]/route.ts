// api/status/[id]/route.ts

import { deleteStatus } from '../../controllers/statusController';

import { NextResponse } from 'next/server';

type Params = {
    id: string
}

// DELETE Status
export async function DELETE(request: Request, context: { params: Params }) {
    const id = context.params.id;
    if (!id) {
        return NextResponse.json({ message: "Invalid ID" }, { status: 400 })
    }
    return deleteStatus(id);
}

