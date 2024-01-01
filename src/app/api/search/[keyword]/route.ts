import { searchPosts } from '../../../../service/posts';
import { NextRequest, NextResponse } from 'next/server';

type Context = {
  params: {
    header: string;
  };
};

export async function GET(req: NextRequest, context: Context) {
  const page = Number(req.nextUrl.searchParams.get('page'));
  const header = context?.params.header;
  return searchPosts(page, header).then((data) => NextResponse.json(data));
}
