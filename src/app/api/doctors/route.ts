import { NextResponse } from "next/server";
import doctors from "./doctor.json"; // ایمپورت فایل JSON

// GET: سرو داده‌های پزشکان
export async function GET() {
  return NextResponse.json(doctors); // بازگشت داده‌ها به صورت JSON
}
