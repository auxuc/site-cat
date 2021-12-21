import { FC, useEffect } from "react";
import { ICat } from "../../Interfaces/cat";
import useStyles from "./styles";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { IconText } from "../icon/icon";
import { useNavigate } from 'react-router-dom';
import { useDeleteService } from '../../Hooks/useDeleteHook'
import { Loading } from "../loading/loading";
import { path } from '../../Routes/path'

export const Card: FC<ICat> = (props, key) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { service, isLoading, isSuccess } = useDeleteService()

  useEffect(()=> {
    if(isSuccess) {
      setTimeout(() =>
      navigate(`${path.HOME}`)
      ,1000)
    }
  },[isSuccess])
  
  const editAction = () => {
    navigate(`${path.EDIT}?uuid=${props.uuid}`)
  }

  const deleteAction = async () => {
    await service(props.uuid)
  }

  if (isLoading) {
    return <Loading />
  }
   
  return (
    <div className={classes.wrapper} key={props.uuid}>
      <div className={classes.textContainer}>
      <div className={classes.rightSide}>
        <IconText IconComponent={MdModeEdit} text="Edit" action={editAction}/>
        <IconText IconComponent={MdDelete} text="Delete" action={deleteAction}/>
            </div>
      <h2>Name: {props.name}</h2>
        <div className={classes.text}>
          <h4>Age: {props.age}</h4>
          <h4>Breed: {props.breed}</h4>
          <h4>Description: {props.description}</h4>
        </div>
      </div>
    </div>
  );
};
