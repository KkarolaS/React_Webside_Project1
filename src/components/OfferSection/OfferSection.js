import OfferBoxesWrapper from "./OfferBoxesWrapper/OfferBoxesWrapper";

const OfferSection = () => {
  return (
    <section id="offer" className="offer">
      <div className="offer-shadow">
        <div className="container">
          <h1 className="offer-title">Czym zajmuje się nasza firma?</h1>
          <OfferBoxesWrapper />
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
