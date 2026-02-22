"use server";

const WORKSPACE = "dev-sharmas-team-1-2803";
const COUNTER_NAME = "first-counter-2803";
const ACCESS_TOKEN = "ut_FmvrhYUwkJvT295Fv2lijaVMvLzIrUE5tmgXtJZV";
const BASE_URL = "https://api.counterapi.dev/v2";

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
  } catch (err) {
    console.error("Counter increment error:", err);
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
  } catch (err) {
    console.error("Counter get error:", err);
    return null;
  }
}
