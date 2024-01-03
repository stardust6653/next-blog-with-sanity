import { Comment } from '../../types/types';

export const patchComment = async (data: Comment) => {
  if (!data) {
    return;
  }

  const JSONData = JSON.stringify(data);
  await fetch('/api/comments', { method: 'POST', body: JSONData });
};

// export const addComment = async (id: string, comment: string) => {
//   return fetch("api/comments", {
//     method: "POST",
//     body: JSON.stringify({ id, comment }),
//   }).then((res) => res.json());
// };
