import { NavLink } from "react-router-dom";

const NavigationItem = (props) => {
  return (
    <>
      <li className="navigation__item">
        <NavLink
          to={props.link}
       
          exact={props.exact}
          className="navigation__link"
        >
          {props.children}
        </NavLink>
      </li>
    </>
  );
};

export default NavigationItem;
