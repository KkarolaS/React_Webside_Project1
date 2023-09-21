import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav className="link-container">
      <NavItem className={"nav-link"} linkName={"#about"} name={"o nas"} />
      <NavItem className={"nav-link"} linkName={"#offer"} name={"oferta"} />
      <NavItem
        className={"nav-link nav-contact"}
        linkName={"#"}
        name={"kontakt"}
      />
    </nav>
  );
};

export default Navbar;
