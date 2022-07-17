import { useState, useEffect } from 'react'
import { AxiosResponse } from 'axios'
import {
  AxiosCfg, ErrorUseAxios, LoadingUseAxios, ApiResponse,
  ReturnUseAxios
} from '../../types'

// type DataUseAxios = AxiosResponse<[]>['data']

// type DataUseAxios = Pick<AxiosResponse<[]>, 'data'>

const useAxios = (cfg:AxiosCfg):ReturnUseAxios => {
  const [loading, setLoading] = useState<LoadingUseAxios>(true)
  const [error, setError] = useState<ErrorUseAxios>(false)
  const [data, setData] = useState<ApiResponse['data']>([])
  const { axiosInstance, method, url } = cfg

  useEffect(() => {
    // To avoid memory leak
    const controller = new AbortController()

    const fetchData = async () => {
      try {
        const response:AxiosResponse<ApiResponse> = await axiosInstance[method](
          url)
        setData(response.data.data)
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    // Cleanup funtion: cancel request to avoid memory leak
    return () => controller.abort()
  }, [])
  return [data, error, loading]
}

export default useAxios
