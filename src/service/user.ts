import { client } from './sanity';

type OAuthUser = {
  id: string;
  email: string;
  name: string;
  username: string;
  image?: string | null;
};

export const addUser = async ({ id, username, name, email, image }: OAuthUser) => {
  return client.createIfNotExists({
    _id: id,
    _type: 'user',
    id,
    username,
    email,
    image,
    name,
    bookmarks: [],
  });
};

export const getOwnership = async (id: string | undefined) => {
  return client.fetch(
    `*[_type == "user" && id == "${id}"]{
      "owner": owner
    }`
  );
};

export const getUserByUsername = async (username: string) => {
  return client.fetch(
    `*[_type == "user" && username == "${username}"][0]{
      ...,
      "id": _id,
      "bookmarks": bookmarks[] -> _id
    }`
  );
};

export const addBookmark = async (userId: string, postId: string) => {
  console.log(postId, userId);
  return client
    .patch(userId)
    .setIfMissing({ bookmarks: [] })
    .append('bookmarks', [
      {
        _ref: postId,
        _type: 'reference',
      },
    ])
    .commit({ autoGenerateArrayKeys: true });
};

export const removeBookmark = async (userId: string, postId: string) => {
  return client
    .patch(userId)
    .unset([`bookmarks[_ref=="${postId}"]`])
    .commit();
};
