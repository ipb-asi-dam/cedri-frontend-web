import { useEffect, useState } from 'react'

import axios from 'config/axios'

export function useApiData (entrypoint, preservePreviousData = true) {
  const [apiEntrypoint, setApiEntrypoint] = useState(entrypoint)
  const [apiData, setApiData] = useState({
    countTotal: 0,
    elements: [],
    pagesTotal: 0
  })
  const [isError, setIsError] = useState(false)
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    (async () => {
      try {
        setIsFetching(true)
        const response = await axios.get(apiEntrypoint)
        setApiData((apiData) => ({
          ...apiData,
          elements: [
            ...preservePreviousData && apiData.elements,
            ...response.data.data.elements
          ]
        }))
      } catch {
        setIsError(true)
      } finally {
        setIsFetching(false)
      }
    })()
  }, [apiEntrypoint, preservePreviousData])

  return [{ apiData, isFetching, isError }, setApiEntrypoint]
}
