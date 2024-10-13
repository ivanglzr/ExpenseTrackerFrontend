"use server"

import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getAccessToken(): Promise<RequestCookie> {
  const access_token = cookies().get("access_token");

  if (!access_token) redirect("/login");

  return access_token;
}
