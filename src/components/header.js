import Navigation from "./Navigation/navigation";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">TEAMWORK</Link>
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
