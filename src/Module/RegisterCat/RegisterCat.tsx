import { FC, useState } from 'react'
import { Form } from '../../Components/form/form'
import { ICat } from '../../Interfaces/cat';
import useStyles from './styles'

const defaultValues: ICat = {
  name: "",
  breed: "",
  age: 0,
  description: "",
  location: ""
};
export const RegisterCat: FC = () => {
  const classes = useStyles()
  const [data, setData] = useState<ICat>({...defaultValues})
console.log(data)
  return (
    <div className={classes.wrapper}>
      <h2>Add a new Cat</h2>
      <Form data={data} setData={setData}/>
      </div>
  );
};