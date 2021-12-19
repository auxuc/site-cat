import { createUseStyles } from "react-jss";

export default createUseStyles({
  wrapper: {
    marginTop: '2%',
    justifyContent: 'center',
  },
  wrapperList: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridAutoRows: "minmax(100px, auto)",
    columnGap:10
  },
  unavailable: {
    display: "flex",
    justifyContent: "center",
  },
});
