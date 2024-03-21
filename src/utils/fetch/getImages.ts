import options from './options'
export async function getImages({
  id,
  type,
}: {
  type: 'movie' | 'tv'
  id: number
}) {
  return fetch(`https://api.themoviedb.org/3/${type}/${id}/images`, options)
    .then((response) => response.json())
    .then((response: MovieImages) => response)
    .catch((err) => {
      throw new Error(err)
    })
}
