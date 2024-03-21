export async function getRecommendations({
  id,
  type,
}: {
  type: ContentType
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

  const response = await fetch(
    `https://api.themoviedb.org/3/${type}/${id}/recommendations?language=en-US&page=1`,
    options
  )
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => {
      throw new Error(err)
    })

  if (type === 'movie') return response as MovieListDetailsResponse
  if (type === 'tv') return response as TVShowListDetailsResponse
  throw new Error(`unhandled type ${type}`)
}
