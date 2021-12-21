import { useQuery } from 'react-query'
import axios from '../Axios/axiosInstance'
import { ICat } from '../Interfaces/cat'
import {AxiosResponse} from 'axios'

const getAllService = async (): Promise<ICat[]> => {
  const data = await axios.get<AxiosResponse<ICat[]>>(`cats/all`)
  return data.data.data
}

export const useGetService = () => {
  const getServiceQuery = useQuery<ICat[]>('getServices', getAllService)

  return {
    service: getServiceQuery.data || ([] as ICat[]),
    isLoading: getServiceQuery.isLoading,
    isError: getServiceQuery.isError,
  }
}
