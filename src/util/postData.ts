import { DataProps } from '../../types/data';

export const postData = async (data: DataProps) => {
  const { title, content, imgUrl, description } = data;

  if (!data) {
    return;
  }

  const formData = new FormData();
  formData.append('title', title);
  formData.append('content', content);
  formData.append('imgUrl', imgUrl);
  formData.append('description', description);

  await fetch('/api/posts/', { method: 'POST', body: formData });
};
