import { createUseStyles } from 'react-jss';

export default createUseStyles({
  loadingContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      width: '100px',
    }
  },
});
