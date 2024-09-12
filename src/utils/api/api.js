const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err))
}

export const fetchBook = async (q) => {
  try {
    const res = q
      ? await fetch(
          `https://openlibrary.org/search.json?q=${q}&fields=title,author_name,cover_edition_key,first_publish_year`
        )
      : await fetch('https://openlibrary.org/subjects/love.json?limit=15')
    return checkResponse(res)
  } catch (error) {
    console.log(error)
    return Promise.reject(error)
  }
}
