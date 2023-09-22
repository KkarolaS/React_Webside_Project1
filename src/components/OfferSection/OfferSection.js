import OfferBoxesWrapper from "./OfferBoxesWrapper/OfferBoxesWrapper";
import classes from "./OfferSection.module.css";

const OfferSection = () => {
  return (
    <section id="offer" className={classes.offer}>
      <div className={classes.offerShadow}>
        <div className={classes.container}>
          <h1 className={classes.offerTitle}>Czym zajmuje się nasza firma?</h1>
          <OfferBoxesWrapper />
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
