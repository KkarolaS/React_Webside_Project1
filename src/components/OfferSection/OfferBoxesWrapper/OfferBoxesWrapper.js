import OfferBox from "./OfferBox";
import { offerData } from "../../../data/offerData";
import classes from "./OfferBoxesWrapper.module.css";

const OfferBoxesWrapper = () => {
  return (
    <section className={classes.offerContainer}>
      {offerData.map(({ id, name, isNew }) => (
        <OfferBox key={id} name={name} isNew={isNew} />
      ))}
    </section>
  );
};

export default OfferBoxesWrapper;
