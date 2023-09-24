import NavItem from "./NavItem";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.linkContainer}>
      <NavItem className={classes.navLink} linkName={"#about"} name={"o nas"} />
      <NavItem
        className={classes.navLink}
        linkName={"#offer"}
        name={"oferta"}
      />
      <NavItem
        className={`${classes.navLink} ${classes.navContact}`}
        linkName={"#"}
        name={"kontakt"}
      />
    </nav>
  );
};

export default Navbar;
