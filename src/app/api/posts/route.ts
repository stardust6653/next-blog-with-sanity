import { createImageURL } from '@/service/posts';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const photo = form.get('photo') as Blob;

  return createImageURL(photo).then((data) => NextResponse.json(data));
}
