import { SaveComment } from '../../types/types';

export const deleteComment = async (data: SaveComment, postId: string) => {
  if (!data) {
    return;
  }

  const JSONData = JSON.stringify({ data: data, postId: postId });

  await fetch(`/api/comments/${data._key}`, { method: 'POST', body: JSONData });
};
