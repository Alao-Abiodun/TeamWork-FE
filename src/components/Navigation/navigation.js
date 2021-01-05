// @ts-nocheck
import NavigationItem from './navigationItem';

const Navigation = props => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <NavigationItem strict link={'/login'} exact>
          Login
        </NavigationItem>
        <NavigationItem link={'/create'}>Create</NavigationItem>
        <NavigationItem link={'/register'} exact>
          Register
        </NavigationItem>
        <NavigationItem link={'/logout'}>Logout</NavigationItem>
      </ul>
    </nav>
  );
};

export default Navigation;
