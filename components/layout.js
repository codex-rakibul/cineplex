import React from 'react';
import Navbar from './navbar';
import FooterCom from './footer';

const LayoutCom = ({ children }) => {
  return (
    <div>
      {/* Navbar */}
      <nav>
        <Navbar/>
      </nav>

      {/* Page content */}
      {children}

      {/* Footer */}
      <footer>
        <FooterCom/>
      </footer>
    </div>
  );
};

export default LayoutCom;
