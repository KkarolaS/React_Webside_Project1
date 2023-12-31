import NavItem from "./NavItem";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.linkContainer}>
      <NavItem
        className={classes.navLink}
        linkName={"#about"}
        name={"about us"}
      />
      <NavItem className={classes.navLink} linkName={"#offer"} name={"offer"} />
      <NavItem
        className={`${classes.navLink} ${classes.navContact}`}
        linkName={"#"}
        name={"contact"}
      />
    </nav>
  );
};

export default Navbar;
