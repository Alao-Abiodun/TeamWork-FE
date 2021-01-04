import Header from '../components/header';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />

      <main className="main">{children}</main>
      {/* <Register /> */}
    </div>
  );
};

export default Layout;
