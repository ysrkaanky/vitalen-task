import options from './options'

export async function getRecommendations({
  id,
  type,
}: {
  type: ContentType
  id: number
}) {
  return fetch(
    `https://api.themoviedb.org/3/${type}/${id}/recommendations?language=en-US&page=1`,
    options
  )
    .then((response) => response.json())
    .then(
      (response: MovieListDetailsResponse | TVShowListDetailsResponse) =>
        response
    )
    .catch((err) => {
      throw new Error(err)
    })
}
