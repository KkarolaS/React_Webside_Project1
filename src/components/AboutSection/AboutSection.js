import EmployeesSection from "./EmpolyeeSection/EmployeesSection";

const AboutSection = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h1 className="about-title">Nasi specjaliści</h1>
        <EmployeesSection />
      </div>
    </section>
  );
};

export default AboutSection;
