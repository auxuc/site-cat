import { createUseStyles } from "react-jss";
import { defaultColor } from "../../Styles/defaultStyles";

export default createUseStyles({
  wrapper: {
    marginBottom: 10,
    display: 'grid',
    border: `2px solid ${defaultColor.darkGrey}`,
    marginLeft: '2%'
  },
  textContainer: {
    marginLeft: '2%'
  },
  text: {
    textAlign: 'center'
  },
});
