import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const commemoratives = await prisma.commemorative.findMany({
      include: { emailLogs: { orderBy: { createdAt: "desc" }, take: 5 } },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(commemoratives);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch commemoratives" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      title,
      recipientName,
      recipientEmail,
      month,
      day,
      year,
      subject,
      body: emailBody,
      photoUrl,
      enabled,
    } = body;

    if (!title || !recipientEmail || !month || !day || !subject || !emailBody) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const user = await prisma.user.upsert({
      where: { email: "default@everdate.app" },
      update: {},
      create: { email: "default@everdate.app", name: "Default User" },
    });

    const commemorative = await prisma.commemorative.create({
      data: {
        userId: user.id,
        title,
        recipientName: recipientName || "",
        recipientEmail,
        month: parseInt(month),
        day: parseInt(day),
        year: year ? parseInt(year) : null,
        subject,
        body: emailBody,
        photoUrl: photoUrl || null,
        enabled: enabled !== false,
      },
    });

    return NextResponse.json(commemorative, { status: 201 });
  } catch (error) {
    console.error("Create commemorative error:", error);
    return NextResponse.json({ error: "Failed to create commemorative" }, { status: 500 });
  }
}
