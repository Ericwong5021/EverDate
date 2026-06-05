import { NextResponse } from "next/server";
import { processScheduledEmails, retryFailedEmails } from "@/lib/scheduler";

export async function POST(request: Request) {
  try {
    const { action } = await request.json();

    if (action === "run") {
      await processScheduledEmails();
      return NextResponse.json({ success: true, message: "Scheduler executed" });
    }

    if (action === "retry") {
      await retryFailedEmails();
      return NextResponse.json({ success: true, message: "Retry executed" });
    }

    return NextResponse.json({ error: "Invalid action. Use 'run' or 'retry'" }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: "Scheduler execution failed" }, { status: 500 });
  }
}
