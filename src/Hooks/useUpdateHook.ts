import { useMutation } from 'react-query'
import axios from '../Axios/axiosInstance'
import { ICat } from '../Interfaces/cat'


const putService = async (dataCat:ICat): Promise<void> => {
  await axios.put<ICat>(`cats/update`, dataCat)
}

export const usePutService = () => {
  const getServiceQuery = useMutation(putService)
  return {
    service: getServiceQuery.mutateAsync,
    isLoading: getServiceQuery.isLoading,
    isSuccess: getServiceQuery.isSuccess,
    isError: getServiceQuery.isError,
  }
}