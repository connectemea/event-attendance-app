import prisma from '@/libs/prisma';
import { NextResponse } from "next/server";

//  GET all role
export async function getRoles() {
    try {
        const roles = await prisma.role.findMany();
        return NextResponse.json({ message: "Roles fetched successfully", roles }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
}

// Create new role
export async function createRole(request: Request) {
    const { name, rank } = await request.json();
    try {
        const newRole = await prisma.role.create({
            data: {
                name,
                rank
            },
        });
        return NextResponse.json({ message: "New role created successfully", newRole }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
}

// Get single Role
export async function getSingleRole(id: string) {
    try {
        const role = await prisma.role.findUnique({
            where: { id },
        });
        return NextResponse.json({ message: "Role fetched successfully", role }, { status: 200 })
    }
    catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
}

// Update Role
export async function updateRole(request: Request, id: string) {
    const { name } = await request.json();
    try {
        const updaterole = await prisma.role.update({
            where: { id },
            data: { name },
        });
        return NextResponse.json({ message: "Role updated successfully", updaterole }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
}

// Delete Role
export async function deleteRole(id: string) {
    try {
        await prisma.role.delete({
            where: { id },
        });
        return NextResponse.json({ message: "Role deleted successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
}