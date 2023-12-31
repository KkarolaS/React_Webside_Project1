const NavItem = ({ linkName, name, className }) => {
  return (
    <li>
      <a className={className} href={linkName}>
        {name}
      </a>
    </li>
  );
};

export default NavItem;
