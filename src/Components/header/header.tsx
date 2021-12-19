import { FC } from "react";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import { path } from "../../Routes/path";
import { FaCat } from "react-icons/fa";

export const Header: FC = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <div className={classes.headerWrapper}>
        <div className={classes.rightSide}>
          <Link className={classes.navItem} to={"/"}>
            <div className={classes.iconDiv}>
              <FaCat size={40} />
            </div>
            <span>Home</span>
          </Link>
          <Link className={classes.navItem} to={path.REGISTER}>
            <span>Add cat</span>
          </Link>
          <Link className={classes.navItem} to={path.EDIT}>
            <span>Edit cat</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
