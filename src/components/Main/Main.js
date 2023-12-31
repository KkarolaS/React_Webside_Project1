import Button from "./Button";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <main className={classes.landingPage}>
      <div className={classes.landingPageShadow}>
        <div className={classes.container}>
          <h1 className={classes.mainSlogan}>
            Our company offers the highest quality products
          </h1>
          <h2 className={classes.secondSlogan}>
            Don't take our word for it - check it out
          </h2>
          <Button />
        </div>
      </div>
    </main>
  );
};

export default Main;
