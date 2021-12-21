import { FC } from "react";
import { IDataLoc } from "../../Interfaces/location";
import { Room } from "../room/room";
import useStyles from "./styles";

export const LocationList: FC<IDataLoc> = ({data}) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapperList}>
        {Object.values(data).map((loc: any, index: number) => (
          <Room {...loc} key={index} />
        ))}
      </div>
    </div>
  );
};
