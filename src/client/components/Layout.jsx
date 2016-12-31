import React from 'react';
import { Header } from '.';

const Layout = ({ children }) => (
  <div className="app-container">
    <Header />
    {children}
  </div>
);

const { element } = React.PropTypes;

Layout.propTypes = {
  children: element.isRequired,
};

export default Layout;
