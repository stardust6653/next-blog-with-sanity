import { title } from 'process';
import { DataProps } from '../../types/data';
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

export async function createPost(dataObj: DataProps) {
  const { title, content, imgUrl, description } = dataObj;
  return client.create(
    {
      _type: 'post',
      title,
      content,
      imgUrl,
      description,
      likes: [],
      comments: [],
    },
    { autoGenerateArrayKeys: true }
  );
}

export async function getPost() {
  return client.fetch(
    `*[_type == "post"] | order(_createdAt desc){
      "title": title,
      "content": content,
      "likes": likes[] -> username,
      "thumbnail" : imgUrl,
      "comments": count(comments),
      "id": _id,
      "createdAt": _createdAt,
      "description": description
    }`
  );
}

export async function getNewPosts() {
  return client.fetch(
    `*[_type == "post"] | order(_createdAt desc) [0...8]{
      "title": title,
      "content": content,
      "likes": likes[] -> username,
      "thumbnail" : imgUrl,
      "comments": count(comments),
      "id": _id,
      "createdAt": _createdAt,
      "description": description
    }`
  );
}
