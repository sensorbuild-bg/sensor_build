import { NextRequest, NextResponse } from 'next/server';

export function GET(request: NextRequest) {
  const target = new URL('/', request.url);
  target.searchParams.set('utm_source', 'van');
  target.searchParams.set('utm_medium', 'qr');
  target.searchParams.set('utm_campaign', 'branded_van');

  return NextResponse.redirect(target, 307);
}
