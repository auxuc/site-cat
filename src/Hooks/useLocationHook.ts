import { useQuery } from "react-query";
import axios from "../Axios/axiosInstance";
import { AxiosResponse } from "axios";
import { IDataLoc } from "../Interfaces/location";

const locationService = async (): Promise<IDataLoc> => {
  const {
    data: { data },
  } = await axios.get<AxiosResponse<IDataLoc>>(`cats/location`);
  return data;
};

export const useLocationService = () => {
  const getServiceQuery = useQuery<IDataLoc>(
    "locationServices",
    locationService
  );

  return {
    service: getServiceQuery.data || null,
    isLoading: getServiceQuery.isLoading,
    isError: getServiceQuery.isError,
  };
};
