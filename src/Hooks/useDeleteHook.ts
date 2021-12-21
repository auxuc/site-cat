import { useMutation } from 'react-query'
import axios from '../Axios/axiosInstance'
import { ICat } from '../Interfaces/cat'

const deleteService = async (uuid: string): Promise<void> => {
  await axios.delete<ICat>(`cats/delete/${uuid}`)
}

export const useDeleteService = () => {
  const getServiceQuery = useMutation(deleteService)

  return {
    service: getServiceQuery.mutateAsync,
    isLoading: getServiceQuery.isLoading,
    isSuccess: getServiceQuery.isSuccess,
    isError: getServiceQuery.isError,
  }
}