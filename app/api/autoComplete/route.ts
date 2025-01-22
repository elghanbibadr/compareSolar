import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY;

  if (!query || !lat || !lng) {
    return NextResponse.json({ error: 'Missing required parameters.' }, { status: 400 });
  }

  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&location=${lat},${lng}&radius=50000&components=country:AU&key=${GOOGLE_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error_message) {
      return NextResponse.json({ error: data.error_message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
