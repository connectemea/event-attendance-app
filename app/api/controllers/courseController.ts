import prisma from '@/libs/prisma';
import { NextResponse } from "next/server";

//  GET all Department
export async function getCourses() {
    try {
        const courses = await prisma.course_type.findMany();
        return NextResponse.json({ message: "Courses fetched successfully", courses }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
}

// Create new department
export async function createCourse(request: Request) {
    const { name } = await request.json();
    try {
        const newCourse = await prisma.course_type.create({
            data: {
                name,
            },
        });
        return NextResponse.json({ message: "New Course created successfully", newCourse }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
}
