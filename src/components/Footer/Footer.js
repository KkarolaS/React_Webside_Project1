import SocialContactWrapper from "./SocialContactWrapper/SocialContactWrapper";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.pageFooter}>
      <div className={`${classes.container} ${classes.pageFooter}`}>
        <p>Company's name - All rights reserved, 2023</p>
        <SocialContactWrapper />
      </div>
    </footer>
  );
};

export default Footer;
