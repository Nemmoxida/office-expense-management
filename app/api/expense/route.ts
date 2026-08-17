import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  return new Response(JSON.stringify({ result: "kermit" }), {
    headers: { "content-type": "application/json" },
  });
}
