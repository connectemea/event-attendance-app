import prisma from '@/libs/prisma';
import { NextResponse } from "next/server";

//  GET all Status
export async function getStatus() {
    try {
        const status = await prisma.user_status.findMany();
        return NextResponse.json({ message: "Status fetched successfully", status }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
}

// Create new Status
export async function createStatus(request: Request) {
    const { name, rank } = await request.json();
    try {
        const newStatus = await prisma.user_status.create({
            data: {
                name,
            },
        });
        return NextResponse.json({ message: "New Status created successfully", newStatus }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
}


// Delete Status
export async function deleteStatus(id: string) {
    try {
        await prisma.user_status.delete({
            where: { id },
        });
        return NextResponse.json({ message: "Status deleted successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
}