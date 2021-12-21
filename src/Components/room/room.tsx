import { FC } from "react";
import { ILocation, IRoom } from "../../Interfaces/location";
import useStyles from "./styles";

export const Room: FC<IRoom> = (props, key) => {
  const classes = useStyles();
  const data = Object.values(props)

  return (
    <div className={classes.wrapper} key={key}>
      <div className={classes.textContainer}>
      <h2>Room: {data[0].location}</h2>
      {data.map((cat: ILocation)=> (
        <div key={cat.uuid}>
          <h4>{cat.name}</h4>
        </div>
      ))}
      </div>
    </div>
  );
};
