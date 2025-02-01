/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { token } = body;

  console.log("tokensss",token)

  const secretKey = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SECRET_KEY ?? "";
  console.log("secret",secretKey)
  const verificationResponse = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}response=${token}`,
    {
      method: "POST",
    }
  );

  console.log("verificiation",verificationResponse)
  const verification = await verificationResponse.json();
  console.log("ver data",verification)
  if (verification.success && verification.score >= 0.5) {
    return NextResponse.json({
      success: true,
    });
  } else {
    return NextResponse.json({
      success: false,
      //   errorCodes: verification("error-codes"),
    });
  }
}
