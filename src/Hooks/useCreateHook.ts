import { useMutation } from 'react-query'
import axios from '../Axios/axiosInstance'
import { ICat } from '../Interfaces/cat'

const postService = async (dataCat:ICat): Promise<void> => {
  await axios.post<ICat>(`cats/create`, dataCat)
}

export const usePostService = () => {
  const getServiceQuery = useMutation(postService)

  return {
    service: getServiceQuery.mutateAsync,
    isLoading: getServiceQuery.isLoading,
    isSuccess: getServiceQuery.isSuccess,
    isError: getServiceQuery.isError,
  }
}