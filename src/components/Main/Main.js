import Button from "./Button";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <main className={classes.landingPage}>
      <div className={classes.landingPageShadow}>
        <div className={classes.container}>
          <h1 className={classes.mainSlogan}>
            Nasza firma oferuje najwyższej jakości produkty
          </h1>
          <h2 className={classes.secondSlogan}>
            Nie wierz nam na słowo - sprawdź
          </h2>
          <Button />
        </div>
      </div>
    </main>
  );
};

export default Main;
