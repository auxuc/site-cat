import { FC } from 'react';
import useStyles from './styles';
import ReactLoading from 'react-loading';
import { defaultColor } from '../../Styles/defaultStyles';

export const Loading: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.loadingContainer}>
      <ReactLoading type='spinningBubbles' color={defaultColor.black}/>
    </div>
  );
};
