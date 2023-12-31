import EmpolyeeInfo from "./EmpolyeeInfo";
import { employeeData } from "../../../data/employeeData";
import classes from "./EmployeeSection.module.css";

const EmployeesSection = () => {
  return (
    <div className={classes.employeesContainer}>
      {employeeData.map(
        ({ id, name, surname, position, info, imageUrl }, index) => (
          <EmpolyeeInfo
            classNameEmployee={classes.employee}
            classNameEmpInfo={classes.employeeInfo}
            key={id}
            isOdd={(index + 1) % 2 === 0 ? true : false}
            name={name}
            surname={surname}
            position={position}
            info={info}
            imageUrl={imageUrl}
          />
        )
      )}
    </div>
  );
};

export default EmployeesSection;
