import { createPost, getPost } from '../../../service/posts';
import { NextRequest, NextResponse } from 'next/server';
import { DataProps } from '../../../../types/data';

export async function POST(req: NextRequest) {
  const form = await req.formData();

  const title = form.get('title')?.toString() ?? '';
  const content = form.get('content')?.toString() ?? '';
  const imgUrl = form.get('imgUrl')?.toString() ?? '';
  const description = form.get('description')?.toString() ?? '';

  const dataObj: DataProps = {
    title,
    content,
    imgUrl,
    description,
  };

  if (!title || !content || !imgUrl || !description) {
    return new Response('Bad Request', { status: 400 });
  }

  return createPost(dataObj).then((data) => NextResponse.json(data));
}
