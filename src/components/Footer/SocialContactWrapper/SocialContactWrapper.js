import SocialLogo from "./SocialLogo";
import classes from "./SocialContactWrapper.module.css";

const SocialContactWrapper = () => {
  return (
    <div className={classes.instaFbContainer}>
      <SocialLogo className={"fa-brands fa-instagram fa-2xl"} />
      <SocialLogo className={"fa-brands fa-square-facebook fa-2xl"} />
    </div>
  );
};

export default SocialContactWrapper;
