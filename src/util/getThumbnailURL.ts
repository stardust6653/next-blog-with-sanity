export const getThumbnailURL = async (blob: File, callback: (url: string) => void) => {
  if (!blob) {
    return;
  }

  const formData = new FormData();
  formData.append('photo', blob);

  await fetch('/api/imageConverter/', { method: 'POST', body: formData })
    .then((res) => res.json())
    .then((result) => callback(result.url));
};
