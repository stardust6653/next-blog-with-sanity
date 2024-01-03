import { searchPosts } from '../../../service/posts';
import { NextRequest, NextResponse } from 'next/server';

type Context = {
  params: {
    keyword: string;
  };
};

export async function GET(req: NextRequest, context: Context) {
  const page = Number(req.nextUrl.searchParams.get('page'));
  console.log(context);
  return searchPosts(page).then((data) => NextResponse.json(data));
}
