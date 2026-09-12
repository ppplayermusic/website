import { NextResponse } from 'next/server';

let cachedToken: string | null = null;
let tokenExpiryTime: number = 0; // Timestamp in milliseconds

export async function POST() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return NextResponse.json({ error: 'Server misconfiguration: missing Spotify credentials' }, { status: 500 });
  }

  const now = Date.now();
  // Buffer of 60 seconds (60000 ms) before expiration to ensure we don't return a token that is about to expire.
  if (cachedToken && tokenExpiryTime > now + 60000) {
    return NextResponse.json({
      access_token: cachedToken,
      expires_in: Math.floor((tokenExpiryTime - now) / 1000),
    });
  }

  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
      cache: 'no-store', // Always hit Spotify directly when cache expires
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    cachedToken = data.access_token;
    // expires_in is in seconds, convert to ms
    tokenExpiryTime = Date.now() + (data.expires_in * 1000);

    return NextResponse.json({
      access_token: cachedToken,
      expires_in: data.expires_in,
    });
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
