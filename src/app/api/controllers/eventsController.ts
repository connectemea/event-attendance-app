import prisma from "@/src/libs/prisma";
import { NextResponse } from "next/server";

//  GET all events
export async function getEvents() {
  try {
    console.log("Events list fetched", process.env.DATABASE_URL);
    const events = await prisma.event.findMany();
    return NextResponse.json(
      { message: "Events fetched successfully", events },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Create new event
export async function createEvent(request: Request) {
  const { title, description, user_id, event_date } = await request.json();
  try {
    const newEvent = await prisma.event.create({
      data: {
        title,
        description,
        user_id,
        event_date
      }
    });
    return NextResponse.json(
      { message: "New event created successfully", newEvent },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Get single event
export async function getSingleEvent(id: string) {
  try {
    const event = await prisma.event.findUnique({
      where: { id }
    });
    return NextResponse.json(
      { message: "Event fetched successfully", event },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Update event
export async function updateEvent(request: Request, id: string) {
  const { title, description } = await request.json();
  try {
    const updatedEvent = await prisma.event.update({
      where: { id },
      data: { title, description }
    });
    return NextResponse.json(
      { message: "Event updated successfully", updatedEvent },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Delete event
export async function deleteEvent(id: string) {
  try {
    await prisma.event.delete({
      where: { id }
    });
    return NextResponse.json(
      { message: "Event deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
