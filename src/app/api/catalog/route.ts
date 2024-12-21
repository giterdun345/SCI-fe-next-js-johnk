import { NextResponse } from "next/server";
import { cache } from "react";
import "server-only";

const fetchHpOptions = cache(async () => {
  try {
    const res = await fetch("https://api.swu-db.com/catalog/hps");
    console.log("res", res);
    if (!res.ok) {
      throw new Error("Failed to fetch data from external API");
    }

    const data = await res.json();
    console.log("filteredOptions", data);
    return data;
  } catch (error) {
    console.error("API Request Error:", error);
    return { error: "Failed to fetch catalog data" };
  }
});

export async function GET() {
  const res = await fetchHpOptions();

  if (res?.error) {
    return NextResponse.json({ error: res.error }, { status: 500 });
  }

  const filteredHpOptions = res.data.filter(
    (option: string) => !option.includes("+"),
  );

  return NextResponse.json({ ...res, data: filteredHpOptions });
}
