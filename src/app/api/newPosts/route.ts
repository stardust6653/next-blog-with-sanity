import { getNewPosts } from '@/service/posts';
import { NextResponse } from 'next/server';

export async function GET() {
  return getNewPosts().then((data) => NextResponse.json(data));
}
