import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBookReader, faBookMedical, faChartBar, faFileExport, faTabletAlt, faAtom, faFolder, faGripHorizontal } from '@fortawesome/free-solid-svg-icons';

const SubMenuItem = ({ title, icon }) => (
  <li className="pro-menu-item" style={{ fontSize: '18px' }}>
    <div className="pro-inner-item" tabIndex="0" role="button">
      <FontAwesomeIcon icon={icon} />
      <span className="pro-item-content">{title}</span>
    </div>
  </li>
);

const MenuItem = ({ title, icon, subItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={`pro-menu-item pro-sub-menu ${isOpen ? 'open' : ''}`} style={{ fontSize: '19px' }}>
      <div className="pro-inner-item" role="button" tabIndex="0" onClick={toggleSubMenu}>
        <FontAwesomeIcon icon={icon} />
        <span className="pro-item-content">{title}</span>
        <span className="pro-arrow-wrapper">
          <span className="pro-arrow"></span>
        </span>
      </div>
      <div className={`react-slidedown pro-inner-list-item ${isOpen ? '' : 'closed'}`}>
        <div>
          <ul>{subItems.map((item, index) => <SubMenuItem key={index} {...item} />)}</ul>
        </div>
      </div>
    </li>
  );
};
export default SubMenuItem;