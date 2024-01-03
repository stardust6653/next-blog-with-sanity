import { addComments } from '@/service/posts';
import { NextRequest, NextResponse } from 'next/server';
import { Comment } from '../../../../types/types';

export const POST = async (req: NextRequest, res: NextResponse) => {
  const data: Comment = await req.json();

  return addComments(data)
    .then((data) => NextResponse.json(data))
    .catch((error) => new Response(JSON.stringify(error), { status: 500 }));
};

export const PUT = async (req: NextRequest, res: NextResponse) => {
  console.log(req.json());
  // console.log('DELETE 메소드 실행 중');
  // console.log(data._key);
};
