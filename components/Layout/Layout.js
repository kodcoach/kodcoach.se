import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <>
      <Header></Header>

      <div className="Layout">{props.children}</div>

      <Footer />
    </>
  );
};

export default Layout;
