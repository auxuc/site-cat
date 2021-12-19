import { useQuery } from 'react-query'
import axios from '../Axios/axiosInstance'
import { ICat } from '../Interfaces/cat'

const postService = async (dataCat: ICat): Promise<ICat> => {
  const { data } = await axios.post<ICat>(`cat/create`, dataCat)
  return data
}

export const usePostService = (dataCat: ICat) => {
  const getServiceQuery = useQuery<ICat>(
    ['create', dataCat],
    () => postService(dataCat),
    {
      enabled: !!dataCat,
    },
  )

  return {
    data: getServiceQuery.data || ({} as ICat),
    isLoading: getServiceQuery.isLoading,
    isError: getServiceQuery.isError,
    status: getServiceQuery.status
  }
}
