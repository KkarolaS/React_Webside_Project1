import classes from "./OfferBox.module.css";

const OfferBox = ({ name, isNew }) => {
  return (
    <div
      className={
        isNew
          ? `${classes.newOfferBox} ${classes.box}`
          : `${classes.offerBox} ${classes.box}`
      }
    >
      {isNew ? <div className={classes.newBoxEclise}></div> : null}
      <p className={isNew ? classes.newOfferName : null}>{name}</p>
      {isNew ? <p className={classes.newOfferText}>(new)</p> : null}
    </div>
  );
};

export default OfferBox;
