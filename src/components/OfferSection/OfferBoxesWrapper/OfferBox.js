const OfferBox = ({ name, isNew }) => {
  return (
    <div className={isNew ? "offer-box1 box" : "offer-box box"}>
      {isNew ? <div className="box1-eclise"></div> : null}
      <p className={isNew ? "offer1-text1" : null}>{name}</p>
      {isNew ? <p className="offer1-text2">(nowość)</p> : null}
    </div>
  );
};

export default OfferBox;
