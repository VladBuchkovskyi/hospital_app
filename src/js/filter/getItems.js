export async function getItems(token) {
  const resp = await fetch('https://ajax.test-danit.com/api/cards', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  const items = await resp.json();
  return items;
}
