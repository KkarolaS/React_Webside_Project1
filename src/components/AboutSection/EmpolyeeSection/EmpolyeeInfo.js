const EmpolyeeInfo = ({ isOdd, name, surname, position, info, imageUrl }) => {
  return (
    <section className={isOdd ? "employee container" : "employee"}>
      <img className="employee-image" src={imageUrl} alt="empolyee"></img>
      <div className="employee-info">
        <h2 className="name">
          {name} i {surname} [ {position} ]
        </h2>
        <p className="info">{info}</p>
      </div>
    </section>
  );
};

export default EmpolyeeInfo;
