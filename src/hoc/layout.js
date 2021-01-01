import Header from "../components/header";

const Layout = (props) => {
  return (
    <div className="layout">
      <Header />

      <main className="main">{props.children}</main>
    </div>
  );
};

export default Layout;
