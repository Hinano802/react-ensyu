export async function fetchDogs(breed) {
  const response = await fetch(
    `https://dog.ceo/api/breed/terrier/${
      breed === "all" ? "" : `${breed}/`
    }images/random/99`
  );

  const data = await response.json();
  return data.message;
}
