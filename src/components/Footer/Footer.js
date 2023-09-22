import SocialContactWrapper from "./SocialContactWrapper/SocialContactWrapper";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.pageFooter}>
      <div className={classes.container + " " + classes.pageFooter}>
        <p>Nazwa firmy - wszelkie prawa zastrzeżone, 2023</p>
        <SocialContactWrapper />
      </div>
    </footer>
  );
};

export default Footer;
