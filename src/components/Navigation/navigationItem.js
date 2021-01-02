import { NavLink } from "react-router-dom";

const NavigationItem = ({ link, children }) => {
  return (
    <>
      <li className="navigation__item">
        <NavLink to={link} className="navigation__link">
          {children}
        </NavLink>
      </li>
    </>
  );
};

export default NavigationItem;
