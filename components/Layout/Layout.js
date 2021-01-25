import * as React from 'react'

import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
 
  return (
    <React.Fragment>
      <Header></Header>

      <div className="Layout">
        {props.children}    
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default Layout; 