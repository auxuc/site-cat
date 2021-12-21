import { FC } from "react";
import { Loading } from "../../Components/loading/loading";
import { LocationList } from "../../Components/locationList/locationList";
import { useLocationService } from "../../Hooks/useLocationHook";
import { IResponseDataLoc } from "../../Interfaces/location";
import useStyles from "./styles";

export const Location: FC = () => {
  const classes = useStyles();
  const { service, isLoading } = useLocationService()

  if (isLoading) {
    return <Loading />
  }

  if (!service) {
    return (
      <div className={classes.unavailable}>
        <h1>Unavailable cats location!</h1>
      </div>
    )
  }
  
  return (
    <div>
      <LocationList data={service as any}  />
    </div>
  );
};
 