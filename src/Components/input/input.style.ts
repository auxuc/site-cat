import { createUseStyles } from "react-jss";
import { defaultColor, fontSize } from "../../Styles/defaultStyles";

export default createUseStyles({
  inputWrapper: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 10,
  },
  label: {
    color: defaultColor.grey,
    fontSize: fontSize.comment,
  },
  input: {
    padding: 10,
    border: `1px solid ${defaultColor.lightGrey}`,
    color: defaultColor.grey,
    fontSize: 16,

    "&:disabled": {
      cursor: "not-allowed",
      opacity: 0.7,
    },
  },
  error: {
    fontSize: fontSize.smallComment,
  },
  messageError: {
    color: defaultColor.warningRed,
  },
  inputError: {
    border: `1px solid ${defaultColor.warningRed}`,

    "&:focus": {
      border: `1px solid ${defaultColor.warningRed}`,
      outlineColor: defaultColor.warningRed,
    },
  },
});
