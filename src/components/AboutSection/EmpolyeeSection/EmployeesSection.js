import EmpolyeeInfo from "./EmpolyeeInfo";
import { employeeData } from "../../../data/employeeData";

const EmployeesSection = () => {
  return (
    <div className="employees-container">
      {employeeData.map(
        ({ id, isOdd, name, surname, position, info, imageUrl }) => (
          <EmpolyeeInfo
            key={id}
            isOdd={isOdd}
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
