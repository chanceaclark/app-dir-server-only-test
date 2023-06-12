'use client';

import { getBrowserClient } from "@client";

export const Button = () => {
    getBrowserClient()

    return (
        <button>Click me</button>
    )
}