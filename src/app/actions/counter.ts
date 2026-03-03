"use server";

const WORKSPACE = process.env.COUNTER_WORKSPACE!;
const COUNTER_NAME = process.env.COUNTER_NAME!;
const ACCESS_TOKEN = process.env.COUNTER_ACCESS_TOKEN!;
const BASE_URL = process.env.COUNTER_BASE_URL || "https://api.counterapi.dev/v2";

export async function incrementVisitorCount(): Promise<number | null> {
  try {
    const res = await fetch(`${BASE_URL}/${WORKSPACE}/${COUNTER_NAME}/up`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      cache: "no-store",
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.data?.up_count ?? null;
  } catch {
    return null;
  }
}

export async function getVisitorCount(): Promise<number | null> {
  try {
    const res = await fetch(`${BASE_URL}/${WORKSPACE}/${COUNTER_NAME}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      cache: "no-store",
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.data?.up_count ?? null;
  } catch {
    return null;
  }
}
