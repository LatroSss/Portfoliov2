import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const COOKIE_NAME = "site_access";
const COOKIE_VALUE = "granted";

function isValidPassword(password: unknown): boolean {
  const expected = process.env.SITE_PASSWORD ?? "matmatdev";
  return typeof password === "string" && password === expected;
}

export async function GET() {
  const cookieStore = await cookies();
  const unlocked = cookieStore.get(COOKIE_NAME)?.value === COOKIE_VALUE;

  return NextResponse.json({ unlocked });
}

export async function POST(request: Request) {
  const body = (await request.json()) as { password?: string };

  if (!isValidPassword(body.password)) {
    return NextResponse.json({ error: "Nieprawidłowe hasło." }, { status: 401 });
  }

  const response = NextResponse.json({ unlocked: true });
  response.cookies.set(COOKIE_NAME, COOKIE_VALUE, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  return response;
}
