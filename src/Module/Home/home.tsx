import { FC } from 'react'
import { List } from '../../Components/list/list'
import { ICat } from '../../Interfaces/cat';


const defaultValues: ICat = {
  name: "test",
  breed: "test",
  age: 5,
  description: "test",
  location: "test"
};
export const Home: FC = () => {
  return (
    <div >
      <List data={[defaultValues]} />
      </div>
  );
};