import { getServerClient } from "@client"
import { NextResponse } from "next/server";

export const GET = () => {
    getServerClient();

    return NextResponse.json({ message: 'Hello from API route' });
}