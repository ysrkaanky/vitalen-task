export async function getTVShows() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.MOVIES_TOKEN}`,
    },
    cache: 'no-store',
  } satisfies RequestInit

  const tvShows = await fetch(
    'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1',
    options
  )
    .then((response) => response.json())
    .then(({ results }: TVShowListDetailsResponse) => {
      return results
    })
    .catch((err) => {
      throw new Error(err)
    })

  return tvShows
}
