import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const commemorative = await prisma.commemorative.findUnique({
      where: { id: params.id },
      include: { emailLogs: { orderBy: { createdAt: "desc" } } },
    });

    if (!commemorative) {
      return NextResponse.json(
        { error: "Commemorative not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(commemorative);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch commemorative" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const commemorative = await prisma.commemorative.update({
      where: { id: params.id },
      data: {
        title: body.title,
        recipientName: body.recipientName,
        recipientEmail: body.recipientEmail,
        month: body.month ? parseInt(body.month) : undefined,
        day: body.day ? parseInt(body.day) : undefined,
        year: body.year ? parseInt(body.year) : null,
        subject: body.subject,
        body: body.body,
        photoUrl: body.photoUrl || null,
        enabled: body.enabled,
      },
    });

    return NextResponse.json(commemorative);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update commemorative" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.emailLog.deleteMany({
      where: { commemorativeId: params.id },
    });
    await prisma.commemorative.delete({ where: { id: params.id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete commemorative" },
      { status: 500 }
    );
  }
}
