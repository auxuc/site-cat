import { createUseStyles } from "react-jss";
import { defaultColor } from "../../Styles/defaultStyles";

export default createUseStyles({
  button: {
    padding: 10,
    border: 0,
    fontSize: 16,
    backgroundColor: defaultColor.lightGrey,

    '&:disabled': {
      cursor: 'not-allowed',
      pointerEvents: 'none',
      opacity: 0.5
    },
    '&:hover': {
      color: defaultColor.white,
      backgroundColor: defaultColor.darkGrey
    }
  },
});
