import prisma from '@/src/libs/prisma';
import { NextResponse } from "next/server";

//  GET all Department
export async function getDepartment() {
    try {
        const departments = await prisma.department.findMany();
        return NextResponse.json({ message: "Departments fetched successfully", departments }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
}

// Create new department
export async function createDepartment(request: Request) {
    const { name } = await request.json();
    try {
        const newDepartment = await prisma.department.create({
            data: {
                name,
            },
        });
        return NextResponse.json({ message: "New department created successfully", newDepartment }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
}

// Get single department
export async function getSingleDepartment(id: string) {
    try {
        const department = await prisma.department.findUnique({
            where: { id },
        });
        return NextResponse.json({ message: "department fetched successfully", department }, { status: 200 })
    }
    catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
}

// Update department
export async function updateDepartment(request: Request, id: string) {
    const { name } = await request.json();
    try {
        const updateDepartment = await prisma.department.update({
            where: { id },
            data: { name },
        });
        return NextResponse.json({ message: "department updated successfully", updateDepartment }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
}

// Delete department
export async function deleteDepartment(id: string) {
    try {
        await prisma.department.delete({
            where: { id },
        });
        return NextResponse.json({ message: "department deleted successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
}