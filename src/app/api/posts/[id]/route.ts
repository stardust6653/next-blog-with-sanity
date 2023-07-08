import { getDetailPost } from '@/service/posts';
import { NextRequest, NextResponse } from 'next/server';

type Context = {
  params: { id: string };
};

export async function GET(req: NextRequest, context: Context) {
  return getDetailPost(context.params.id).then((data) => NextResponse.json(data));
}
