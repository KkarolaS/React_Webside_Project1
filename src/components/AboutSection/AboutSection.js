import EmployeesSection from "./EmpolyeeSection/EmployeesSection";
import classes from "./AboutSection.module.css";

const AboutSection = () => {
  return (
    <section id="about" className={classes.about}>
      <div className={classes.container}>
        <h1 className={classes.aboutTitle}>Our specialists</h1>
        <EmployeesSection />
      </div>
    </section>
  );
};

export default AboutSection;
