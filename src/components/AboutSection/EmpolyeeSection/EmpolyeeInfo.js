import classes from "./EmployeeInfo.module.css";

const EmpolyeeInfo = ({
  classNameEmployee,
  classNameEmpInfo,
  isOdd,
  name,
  surname,
  position,
  info,
  imageUrl,
}) => {
  return (
    <section
      className={
        isOdd ? classNameEmployee + " " + classes.container : classNameEmployee
      }
    >
      <img
        className={classes.employeeImage}
        src={imageUrl}
        alt="empolyee"
      ></img>
      <div className={classNameEmpInfo}>
        <h2 className={classes.name}>
          {name} i {surname} [ {position} ]
        </h2>
        <p className={classes.info}>{info}</p>
      </div>
    </section>
  );
};

export default EmpolyeeInfo;
