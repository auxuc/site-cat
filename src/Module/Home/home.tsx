import { FC } from "react";
import { List } from "../../Components/list/list";
import { Loading } from "../../Components/loading/loading";
import { useGetService } from "../../Hooks/useGetHook";
import { ICat } from "../../Interfaces/cat";

export const Home: FC = () => {
  const { service, isLoading } = useGetService()

  if (isLoading) {
    return <Loading />
  }
  console.log(service)
  return (
    <div>
      <List data={service as ICat[]} />
    </div>
  );
};
