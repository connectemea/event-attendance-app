import prisma from '@/libs/prisma';
import { NextResponse } from "next/server";

//  GET all students
export async function getStudents() {
    try {
        const events = await prisma.student.findMany();
        return NextResponse.json({ message: "Students fetched successfully", events }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
}

// Create new student
export async function createStudent(request: Request) {
    const { admission_no, user_id, name, roll_no, department_id, course_id, joining_year, is_active } = await request.json();
    try {
        const newStudent = await prisma.student.create({
            data: {
                admission_no,
                user_id,
                name,
                roll_no,
                department_id,
                course_id,
                joining_year,
                is_active
            },
        });
        return NextResponse.json({ message: "New student created successfully", newStudent }, { status: 201 })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
}

// Get single student
export async function getSingleStudent(id: string) {
    try {
        const Student = await prisma.student.findUnique({
            where: { admission_no: id }, // Fix: Use 'id' as the property name
        });
        return NextResponse.json({ message: "Student fetched successfully", Student }, { status: 200 })
    }
    catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
}

// Update student
export async function updateStudent(request: Request, id: string) {
    const { user_id, name, roll_no, department_id, course_id, joining_year, is_active } = await request.json();
    try {
        const updatedStudent = await prisma.student.update({
            where: { admission_no: id },
            data: {
                user_id,
                name,
                roll_no,
                department_id,
                course_id,
                joining_year,
                is_active
            },
        });
        return NextResponse.json({ message: "Student updated successfully", updatedStudent }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
}

// Delete student
export async function deleteStudent(id: string) {
    try {
        await prisma.student.delete({
            where: { admission_no: id },
        });
        return NextResponse.json({ message: "Student deleted successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
}