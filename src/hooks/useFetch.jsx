import { useEffect, useState } from 'react'

function useFetch(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    fetch(url)
      .then((response) => response.json())
      .then((d) => {
        setData(d)
        setLoading(false)
      })
      .catch((err) => {
        setError(err)
        setLoading(false)
      })
  }, [url])

  return { data, loading, error, isError: !!error, isSuccess: !!data }
}

export default useFetch
