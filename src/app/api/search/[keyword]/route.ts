import { searchPosts } from '../../../../service/posts';
import { NextRequest, NextResponse } from 'next/server';

type Context = {
  params: { keyword: string };
};

export async function GET(req: NextRequest, context: Context) {
  const keyword = context.params.keyword;
  return searchPosts(keyword).then((data) => NextResponse.json(data));
}
