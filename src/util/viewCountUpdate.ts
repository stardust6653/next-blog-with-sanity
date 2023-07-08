export async function viewCountUpdate(id: string, viewCount: number) {
  return fetch('/api/viewCount', {
    method: 'PUT',
    body: JSON.stringify({ id, viewCount }),
  });
}
