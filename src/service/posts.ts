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
      viewCount: 0,
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
      "description": description,
      "viewCount": viewCount
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
      "description": description,
      "viewCount": viewCount
    }`
  );
}

export async function getDetailPost(id: string) {
  return client.fetch(
    `*[_type == "post" && _id == "${id}"]{
      "title": title,
      "content": content,
      "likes": likes[] -> username,
      "thumbnail" : imgUrl,
      "comments": count(comments),
      "id": _id,
      "createdAt": _createdAt,
      "description": description,
      "viewCount": viewCount
    }`
  );
}

export async function increaseCount(id: string, currentCount: number) {
  return client
    .patch(id)
    .set({ viewCount: currentCount + 1 })
    .commit();
}

export async function likePost(postId: string, userId: string) {
  return client
    .patch(postId)
    .setIfMissing({ likes: [] })
    .append('likes', [
      {
        _ref: userId,
        _type: 'reference',
      },
    ])
    .commit({ autoGenerateArrayKeys: true });
}

export async function dislikePost(postId: string, userId: string) {
  return client
    .patch(postId)
    .unset([`likes[_ref == "${userId}"]`])
    .commit();
}
