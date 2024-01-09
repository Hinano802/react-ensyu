export async function fetchAmibo(path) {
  const response = await fetch(`https://www.amiiboapi.com/api/${path}/`);

  const data = await response.json();
  return data.amibo;
}
