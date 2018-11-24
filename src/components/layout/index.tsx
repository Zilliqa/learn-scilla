import React from 'react';
import Footer from '../footer';
import Header from '../header';

interface IProps {
  children?: React.ReactNode;
}

const Layout: React.SFC<IProps> = (props) => {
  const { children } = props;
  return (
    <div>
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
