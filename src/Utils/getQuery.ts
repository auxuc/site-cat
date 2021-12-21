export const useQuery = (search: string ) => {
  return new URLSearchParams(search)
}