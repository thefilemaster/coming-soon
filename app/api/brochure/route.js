// app/api/brochure/route.js
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function POST(req) {
  try {
    const { name, phone, email } = await req.json();

    if (!name?.trim() || !phone?.trim()) {
      return NextResponse.json(
        { error: "Name and phone are required." },
        { status: 400 }
      );
    }

    const payload = {
      name: name.trim(),
      phone: phone.trim(),
      email: email?.trim() || null,
    };

    const { error } = await supabase
      .from("brochure_downloads")
      .insert(payload);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to save lead" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("API /brochure error:", err);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}