import prisma from '@/libs/prisma';
import { NextResponse } from "next/server";

//  GET all Club
export async function getClubs() {
    try {
        const clubs = await prisma.club.findMany();
        return NextResponse.json({ message: "Clubs fetched successfully", clubs }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
}

// Create new Club
export async function createClub(request: Request) {
    const { club_name } = await request.json();
    try {
        const newClub = await prisma.club.create({
            data: {
                club_name,
            },
        });
        return NextResponse.json({ message: "New Club created successfully", newClub }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
}

// Get single Club
export async function getSingleClub(id: string) {
    try {
        const Club = await prisma.club.findUnique({
            where: { id },
        });
        return NextResponse.json({ message: "Club fetched successfully", Club }, { status: 200 })
    }
    catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
}

// Update Club
export async function updateClub(request: Request, id: string) {
    const { club_name } = await request.json();
    try {
        const updateClub = await prisma.club.update({
            where: { id },
            data: { club_name },
        });
        return NextResponse.json({ message: "Club updated successfully", updateClub }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
}

// Delete Club
export async function deleteClub(id: string) {
    try {
        await prisma.club.delete({
            where: { id },
        });
        return NextResponse.json({ message: "Club deleted successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
}