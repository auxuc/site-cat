import { FC, useEffect, useState } from "react";
import { Form } from "../../Components/form/form";
import { ICat } from "../../Interfaces/cat";
import useStyles from "./styles";
import { Loading } from "../../Components/loading/loading";
import { usePostService } from "../../Hooks/useCreateHook";
import { path } from "../../Routes/path";
import { useNavigate } from "react-router-dom";

const defaultValues: ICat = {
  uuid: "",
  name: "",
  breed: "",
  age: 0,
  description: "",
  location: "",
};
export const RegisterCat: FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [dataForm, setDataForm] = useState<ICat>({ ...defaultValues });
  const { service, isLoading, isSuccess  } = usePostService();

  useEffect(()=> {
    if(isSuccess) navigate(`${path.HOME}`)
  },[isSuccess])

  const onSubmit = async (data: ICat) => {
    if (data) {
      setDataForm(data);
      await service(data);
      return;
    }
  };

  return (
    <div className={classes.wrapper}>
      {isLoading && <Loading />}
      <h2>Add a new Cat</h2>
      <Form data={dataForm} onSubmit={onSubmit} />
    </div>
  );
};
