import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const apiKey = process.env.YOUTUBE_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: 'Server misconfiguration: missing YouTube credentials' }, { status: 500 });
  }

  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q');
  const regionCode = searchParams.get('regionCode');

  if (!q || typeof q !== 'string') {
    return NextResponse.json({ error: 'Missing or invalid query parameter "q"' }, { status: 400 });
  }

  // Basic validation to prevent excessively long queries
  if (q.length > 200) {
    return NextResponse.json({ error: 'Query parameter "q" is too long' }, { status: 400 });
  }

  if (regionCode && (typeof regionCode !== 'string' || regionCode.length > 2)) {
    return NextResponse.json({ error: 'Invalid regionCode' }, { status: 400 });
  }

  try {
    const youtubeUrl = new URL('https://www.googleapis.com/youtube/v3/search');
    youtubeUrl.searchParams.append('q', q);
    youtubeUrl.searchParams.append('key', apiKey);
    youtubeUrl.searchParams.append('part', 'snippet');
    youtubeUrl.searchParams.append('fields', 'items(id(videoId),snippet(title))');
    youtubeUrl.searchParams.append('maxResults', '15');
    youtubeUrl.searchParams.append('type', 'video');
    youtubeUrl.searchParams.append('videoEmbeddable', 'true');
    youtubeUrl.searchParams.append('videoSyndicated', 'true');
    if (regionCode) {
      youtubeUrl.searchParams.append('regionCode', regionCode);
    }

    const response = await fetch(youtubeUrl.toString(), {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      // Using Next.js fetch caching if appropriate, but since queries vary highly,
      // it's safer to avoid caching on the Edge for personalized/region searches,
      // or at least cache for a short duration.
      next: { revalidate: 3600 }, 
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    const items = data.items || [];
    const barWords = ['full album', 'album playlist', 'complete album'];
    
    // Filter and sanitize, returning exactly what the Flutter client expects: just a list of IDs
    const filteredIds = items
      .filter((item: { snippet?: { title?: string } }) => {
        const title = (item.snippet?.title || '').toLowerCase();
        return !barWords.some((w) => title.includes(w));
      })
      .map((item: { id?: { videoId?: string } }) => item.id?.videoId)
      .filter((id: unknown) => typeof id === 'string' && id.length === 11);

    return NextResponse.json({ ids: filteredIds });
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
