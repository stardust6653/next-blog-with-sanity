import { searchPosts } from '../../../service/posts';
import { NextResponse } from 'next/server';

export async function GET() {
  return searchPosts().then((data) => NextResponse.json(data));
}
