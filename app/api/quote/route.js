// app/api/quote/route.js
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function POST(req) {
  try {
    const payload = await req.json();

    // Basic sanitization/shape
    const data = {
      hospital_name: payload.hospitalName?.trim() || "",
      contact_name: payload.contactName?.trim() || "",
      phone: payload.phone?.trim() || "",
      email: payload.email?.trim() || "",
      products: Array.isArray(payload.product) ? payload.product : [],
      notes: payload.notes?.trim() || "",
    };

    if (!data.hospital_name) {
      return NextResponse.json({ error: "Hospital name is required" }, { status: 400 });
    }

    const { error } = await supabase.from("quotes").insert(data);
    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: "Failed to save quote" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}