import { FC, useEffect } from "react";
import { Form } from "../../Components/form/form";
import { Loading } from "../../Components/loading/loading";
import { useGetOneService } from "../../Hooks/useGetOneHook";
import { usePutService } from "../../Hooks/useUpdateHook";
import { ICat } from "../../Interfaces/cat";
import useStyles from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "../../Utils/getQuery";
import { path } from "../../Routes/path";

export const EditCat: FC = () => {
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();
  const { search } = location;
  let query = useQuery(search);
  const uuid = query.get("uuid");
  const { service, isLoading, isSuccess } = usePutService();
  const { getService, loading } = useGetOneService(uuid!);

  useEffect(()=> {
    if(isSuccess) navigate(`${path.HOME}`)
  },[isSuccess])

  const onSubmit = async (data: ICat) => {
    if (data) {
      await service(data);
      return;
    }
  };
  if (loading || isLoading) {
    return <Loading />;
  }

  return (
    <div className={classes.wrapper}>
      <h2>Edit Cat</h2>
      <Form data={getService} onSubmit={onSubmit} />
    </div>
  );
};
