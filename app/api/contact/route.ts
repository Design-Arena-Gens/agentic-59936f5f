import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  city?: string;
  story?: string;
  interest?: string;
  fullName?: string;
  contactEmail?: string;
  introduction?: string;
};

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  let payload: ContactPayload = {};

  if (contentType.includes("application/json")) {
    payload = await request.json();
  } else if (contentType.includes("application/x-www-form-urlencoded")) {
    const formData = await request.formData();
    formData.forEach((value, key) => {
      payload[key as keyof ContactPayload] = value.toString();
    });
  } else if (contentType.includes("multipart/form-data")) {
    const formData = await request.formData();
    formData.forEach((value, key) => {
      payload[key as keyof ContactPayload] = value.toString();
    });
  }

  console.info("New consultation request", {
    source: payload.interest ? "profile-introduction" : "homepage-consultation",
    payload
  });

  return NextResponse.json(
    {
      status: "success",
      message: "Your request has been shared with our matchmaking team. Expect a response within 24 hours."
    },
    { status: 200 }
  );
}
