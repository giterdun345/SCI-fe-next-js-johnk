import { NextResponse } from "next/server";
import { cache } from "react";
import "server-only";

const fetchHpOptions = cache(async () => {
  try {
    const res = await fetch("https://api.swu-db.com/catalog/hps");

    if (!res.ok) {
      return { error: "Failed to fetch data from external API" };
    }

    return await res.json();
  } catch (error) {
    console.error("API Request Error:", error);
    return { error: "Error during data fetch" };
  }
});

export async function GET() {
  const { data, error } = await fetchHpOptions();

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const filteredHpOptions = data.filter(
    (option: string) => !option.includes("+"),
  );

  return NextResponse.json(filteredHpOptions);
}
