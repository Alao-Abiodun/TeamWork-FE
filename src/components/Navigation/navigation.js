import NavigationItem from "./navigationItem";

const Navigation = (props) => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <NavigationItem link={"/login"}>
          Login
        </NavigationItem>
        <NavigationItem link={"/"}>Create</NavigationItem>
        <NavigationItem link={"/register"}>Register</NavigationItem>
        <NavigationItem link={"/"}>Logout</NavigationItem>
      </ul>
    </nav>
  );
};

export default Navigation;
