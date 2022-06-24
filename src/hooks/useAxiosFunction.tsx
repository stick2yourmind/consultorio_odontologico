import { useState, useEffect } from 'react'
import {
  ReturnUseAxiosFunction, ReturnRespUseAxiosFn, ReturnErrUseAxiosFn,
  ReturnLoadUseAxiosFn, CtrlUseAxiosFn, AxiosFetchParams
} from '../../types'

const useAxiosFunction = ():ReturnUseAxiosFunction => {
  const [response, setResponse] = useState<ReturnRespUseAxiosFn | []>([])
  const [error, setError] = useState<ReturnErrUseAxiosFn>(false)
  const [loading, setLoading] = useState<ReturnLoadUseAxiosFn>(false)
  const [controller, setController] = useState<CtrlUseAxiosFn>()

  const axiosFetch = async (configObj:AxiosFetchParams) => {
    const {
      axiosInstance,
      method,
      url,
      requestConfig = {}
    } = configObj

    console.log('configObj')
    console.log(configObj)
    try {
      setLoading(true)
      const ctrl = new AbortController()
      setController(ctrl)
      const res = await axiosInstance[method](url, {
        ...requestConfig
      })
      console.log('res.data useAxiosFn')
      console.log(res.data)
      setResponse(res.data)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // useEffect cleanup function
    return () => controller && controller.abort()
  }, [controller])

  return [response as ReturnRespUseAxiosFn, error, loading, axiosFetch]
}

export default useAxiosFunction
