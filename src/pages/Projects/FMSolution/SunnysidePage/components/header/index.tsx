import React from 'react';
import './index.scss';

const HEADER_ITEMS = ['About', 'Service', 'Project', 'Contact'];

const Header = () => (
  <div>
      <div>
          <div>logo</div>
          <div>
              {HEADER_ITEMS.map((item: string) => <div key={item}>{item}</div>)}
          </div>
      </div>
      <div>
          <i></i>
          WE ARE CREATIVES
      </div>

  </div>
);

export default Header;
