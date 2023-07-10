import { NextRequest, NextResponse } from 'next/server';
import { addBookmark, removeBookmark } from '@/service/user';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import { getBookmarkList } from '@/service/posts';

export const GET = async (req: NextRequest) => {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response('Authentication Error', { status: 401 });
  }

  return getBookmarkList(user.username) //
    .then((res) => NextResponse.json(res))
    .catch((error) => new Response(JSON.stringify(error), { status: 500 }));
};
