import { Link } from "react-router-dom";
import classes from "./Layout.module.css";
import { Search } from "../Search/Search";
const Navigation = () => {
  return (
    <nav className={classes.Navigation}>
      <Link to="/">Post Feed</Link>
      <Search
        />
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default Navigation;