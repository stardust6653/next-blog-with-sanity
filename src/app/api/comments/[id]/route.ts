import { NextRequest, NextResponse } from 'next/server';
import { SaveComment } from '../../../../../types/types';
import { deleteComments } from '@/service/posts';

export const POST = async (req: NextRequest, res: NextResponse) => {
  const json = await req.json();
  const data: SaveComment = json.data;
  const postId: string = json.postId;

  return deleteComments(data._key, postId)
    .then((data) => NextResponse.json(data))
    .catch((error) => new Response(JSON.stringify(error), { status: 500 }));
};
