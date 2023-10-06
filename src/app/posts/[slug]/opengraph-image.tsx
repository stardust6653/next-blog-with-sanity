import { getDetailPost } from '@/service/posts';
import { ImageResponse } from 'next/server';

export const runtime = 'edge';

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
  const post = await getDetailPost(params.slug);

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img width={400} height={200} src={post[0]?.thumbnail} alt={post[0]?.description} />
        <p>{post[0]?.title}</p>
      </div>
    )
  );
}
