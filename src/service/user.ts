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
    username,
    email,
    image,
    name,
    bookmarks: [],
  });
};
