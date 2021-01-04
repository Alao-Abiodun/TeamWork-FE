import NavigationItem from './navigationItem';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <NavigationItem link={'/'} exact>
          Login
        </NavigationItem>
        <NavigationItem link={'/'}>Create</NavigationItem>
        <NavigationItem link={'/Register'} exact>
          Register
        </NavigationItem>
        <NavigationItem link={'/'}>Logout</NavigationItem>
      </ul>
    </nav>
  );
};

export default Navigation;
