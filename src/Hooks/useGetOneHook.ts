import { useQuery } from 'react-query'
import axios from '../Axios/axiosInstance'
import { ICat } from '../Interfaces/cat'
import {AxiosResponse} from 'axios'

const getOneService = async (uuid: string): Promise<ICat> => {
  const { data } = await axios.get<AxiosResponse<ICat>>(`cats/get/${uuid}`)
  return data.data
}

export const useGetOneService = (uuid: string) => {
  const getServiceQuery = useQuery<ICat>(
    ['getOneService', uuid],
    () => getOneService(uuid),
    {
      enabled: !!uuid,
    },
  )

  return {
    getService: getServiceQuery.data || ({} as ICat),
    loading: getServiceQuery.isLoading,
    isError: getServiceQuery.isError,
  }
}