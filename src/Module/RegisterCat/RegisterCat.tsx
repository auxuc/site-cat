import { FC, useEffect, useState } from 'react'
import { Form } from '../../Components/form/form'
import { ICat } from '../../Interfaces/cat';
import useStyles from './styles'
import { Loading }from '../../Components/loading/loading'
import {usePostService} from '../../Hooks/useCreateHook'

const defaultValues: ICat = {
  name: "",
  breed: "",
  age: 0,
  description: "",
  location: ""
};
export const RegisterCat: FC = () => {
  const classes = useStyles()
  const [dataForm, setDataForm] = useState<ICat>({...defaultValues})
  const { isLoading, isError, status } = usePostService()
  useEffect(()=> {
    if(isError && status === 'error') {alert(`test${isError},${status}`)}
  },[isError])
  const onSubmit = (data: ICat) => {
    
    setDataForm(data)
  }

  return (
    <div className={classes.wrapper}>
      {isLoading && status && (<Loading/>)}
      <h2>Add a new Cat</h2>
      <Form data={dataForm} setData={onSubmit}/>
      </div>
  );
};