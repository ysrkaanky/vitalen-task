export async function getImages({
  id,
  type,
}: {
  type: 'movie' | 'tv'
  id: number
}) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.MOVIES_TOKEN}`,
    },
    cache: 'no-cache',
  } satisfies RequestInit

  const images = await fetch(
    `https://api.themoviedb.org/3/${type}/${id}/images`,
    options
  )
    .then((response) => response.json())
    .then((response: MovieImages) => response)
    .catch((err) => {
      throw new Error(err)
    })
  return images
}
