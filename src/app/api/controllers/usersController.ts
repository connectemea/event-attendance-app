import prisma from '@/libs/prisma';
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

//  GET all User
export async function getUsers() {
    try {
        const users = await prisma.user.findMany();
        return NextResponse.json({ message: "Users fetched successfully", users }, { status: 200 })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
}

// Create User
export async function createUser(request: Request) {
    try {
        const { name, email, password, nodal_officer, phone_number, club_id } = await request.json();

        console.log(name, email, password);
        // Validate user input
        if (!name || !email || !password || !nodal_officer) {
            return NextResponse.json({
                message: "Please fill in all fields"
            }, { status: 400 })
        }
        // Check if user already exists
        const user = await prisma.user.findFirst({ where: { email } });
        if (user) {
            return NextResponse.json({
                message: "User already exists"
            }, { status: 400 })
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);


        // Get the role id
        // rank 3 is user defualt role user
        const roleId = await prisma.role.findFirst({ where: { rank: 3 } });
        if (!roleId) {
            return NextResponse.json({
                message: "Role not found"
            }, { status: 404 })
        }
        // Get the status id
        const status_id = await prisma.user_status.findFirst({ where: { name: 'pending' } });

        // Save user to database using Prisma
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                phone_number: phone_number || null,
                role_id: roleId.id,
                status_id: status_id?.id || null,
                club_id: club_id || null
            }
        });
        // create club_coordinator
        const club_coordinator = await prisma.club_coordinator.create({
            data: {
                name: nodal_officer,
                club_id: club_id,
                user_id: newUser.id
            }
        });

        const user_request = await prisma.user_request.create({
            data: {
                user_id: newUser.id,
                is_approved: false
            }
        });
        console.log(newUser, club_coordinator, user_request);
        return NextResponse.json({
            message: "User registered successfully!"
        }, { status: 201 })
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            message: "An error occurred while registering the user"
        }, { status: 500 })
    }
}