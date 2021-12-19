import { createUseStyles } from 'react-jss'
import { defaultColor } from '../../Styles/defaultStyles'

export default createUseStyles({
  header: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: 60,
    borderBottom: `2px solid ${defaultColor.darkGrey}`,
    backgroundColor: defaultColor.white
  },
  headerWrapper: {
    height: 60,
    alignItems: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  rightSide: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',

    '& a': {
      marginLeft: 15,
      marginBottom: 3,

      '&:hover': {
        borderBottom: `3px solid ${defaultColor.darkGrey}`,
        marginBottom: 0
      }

    },
  },
  navItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
    color: defaultColor.black,
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'none'
    },

    '& svg': {
      marginRight: 5,
    },
  },
  iconDiv: {
    marginTop: '1%',
  },
})
