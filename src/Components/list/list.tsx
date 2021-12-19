import { FC } from "react";
import { ICat, IListCats } from "../../Interfaces/cat";
import { Card } from "../card/card";
import useStyles from "./styles";

export const List: FC<IListCats> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapperList}>
        {props.data.map((cat: ICat, index: number) => (
          <Card {...cat} key={`${cat.name}${index}`} />
        ))}
      </div>
      {!props.data.length && (
        <div className={classes.unavailable}>
          <h1>Unavailable cats!</h1>
        </div>
      )}
    </div>
  );
};
