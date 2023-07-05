import { assetsURL, client } from './sanity';

export async function createImageURL(photo: Blob) {
  return fetch(assetsURL, {
    method: 'POST',
    headers: {
      'content-type': photo.type,
      authorization: `Bearer ${process.env.SANITY_SECRET_TOKEN}`,
    },
    body: photo,
  })
    .then((res) => res.json())
    .then((result) => {
      return client.create(
        {
          _type: 'photo',
          photo: { asset: { _ref: result.document._id } },
          name: result.document._id,
          url: result.document.url,
        },
        { autoGenerateArrayKeys: true }
      );
    });
}
