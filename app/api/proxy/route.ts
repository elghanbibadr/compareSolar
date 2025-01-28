/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // Parse request body
    const response = await axios.post("https://lead-proxy-crve4r.deno.dev/data", body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return NextResponse.json(response.data, { status: response.status });
  } catch (error: any) {
    console.error("Error in proxy:", error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: error.response?.status || 500 });
  }
}
