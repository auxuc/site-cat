import { FC } from "react";
import { ICat } from "../../Interfaces/cat";
import useStyles from "./styles";

export const Card: FC<ICat> = (props, key) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper} key={key}>
      <div className={classes.textContainer}>
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
