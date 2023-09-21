import SocialContactWrapper from "./SocialContactWrapper/SocialContactWrapper";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes["page-footer"]}>
      <div className={classes.container + " " + classes["page-footer"]}>
        <p>Nazwa firmy - wszelkie prawa zastrzeżone, 2023</p>
        <SocialContactWrapper />
      </div>
    </footer>
  );
};

export default Footer;
