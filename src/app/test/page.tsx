"use client";

import { getAccessToken } from "@/services/user";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { useEffect, useState } from "react";

export default function Page() {
  const [cookie, setCookie] = useState<RequestCookie>();

  const getCookie = async () => setCookie(await getAccessToken());

  return (
    <>
      <button onClick={getCookie}>Get</button>
      <br />
      {cookie?.value}
      <br />
      {cookie?.name}
    </>
  );
}
