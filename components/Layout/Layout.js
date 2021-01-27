import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>

      <main className="Layout flex-grow px-5 py-8 flex flex-col mx-auto container">
        {props.children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
