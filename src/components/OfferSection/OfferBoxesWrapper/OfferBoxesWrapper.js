import OfferBox from "./OfferBox";
import { offerData } from "../../../data/offerData";

const OfferBoxesWrapper = () => {
  return (
    <section className="offer-container">
      {offerData.map(({ id, name, isNew }) => (
        <OfferBox key={id} name={name} isNew={isNew} />
      ))}
    </section>
  );
};

export default OfferBoxesWrapper;
