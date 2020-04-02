import React, { Fragment } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <main className="container mainContainer">{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
