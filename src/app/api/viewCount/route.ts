import { increaseCount } from '@/service/posts';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(req: NextRequest) {
  const { id, viewCount } = await req.json();

  return increaseCount(id, viewCount).then((data) => NextResponse.json(data));
}
