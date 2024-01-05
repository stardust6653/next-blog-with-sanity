import { addComments } from '@/service/posts';
import { NextRequest, NextResponse } from 'next/server';
import { Comment } from '../../../../types/types';

export const POST = async (req: NextRequest, res: NextResponse) => {
  const data: Comment = await req.json();

  return addComments(data)
    .then((data) => NextResponse.json(data))
    .catch((error) => new Response(JSON.stringify(error), { status: 500 }));
};

