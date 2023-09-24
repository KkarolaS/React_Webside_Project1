import Navbar from "./Navbar/Navbar";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={`${classes.pageNavbar} ${classes.header}`}>
      <div className={`${classes.container} ${classes.pageNavbar}`}>
        <div className={classes.companyName}>moja firma</div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
