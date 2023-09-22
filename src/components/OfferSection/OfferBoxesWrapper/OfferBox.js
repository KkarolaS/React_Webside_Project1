import classes from "./OfferBox.module.css";

const OfferBox = ({ name, isNew }) => {
  return (
    <div
      className={
        isNew
          ? classes.offerBox1 + " " + classes.box
          : classes.offerBox + " " + classes.box
      }
    >
      {isNew ? <div className={classes.box1Eclise}></div> : null}
      <p className={isNew ? classes.offer1Text1 : null}>{name}</p>
      {isNew ? <p className={classes.offer1Text2}>(nowość)</p> : null}
    </div>
  );
};

export default OfferBox;
