import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFileWord, faBookReader, faBookMedical, faChartBar, faFileExport, faTabletAlt, faAtom, faFolder, faGripHorizontal, faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { FaChevronLeft } from "react-icons/fa";
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SideMenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{ backgroundColor: "#e9ecef" }}>
      <img src='SIAQ.png' alt='SIAQ' />
      <hr />
      <ul className="nav flex-column sticky-top pl-0 pt-5 p-3 mt-2 ">
        <li className="nav-item mb-2" >
          <Link to="#" className="nav-link text-secondary">
            <FontAwesomeIcon icon={faGripHorizontal} className="font-weight-bold" />
            <span className="ml-3 p-3">Dashboard</span>
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="#" className="nav-link text-secondary">
            <FontAwesomeIcon icon={faUser} className="font-weight-bold" />
            <span className="ml-3">User</span>
          </Link>
        </li>
        
        <li className="nav-item mb-2">
          <Link to="#" className="nav-link text-secondary">
            <FontAwesomeIcon icon={faBookReader} className="font-weight-bold" />
            <span className="ml-3">Client</span>
          </Link>
          <ul className="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link text-secondary"><FontAwesomeIcon icon={faBookReader} /> Data Report </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link text-secondary"><FontAwesomeIcon icon={faBookMedical} /> File Report </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item mb-2">
          <Link to="#" className="nav-link text-secondary"> Client Management </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="#" className="nav-link text-secondary"> Building Management </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="#" className="nav-link text-secondary"> Client Representative </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="#" className="nav-link text-secondary"> Client Statistics</Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="#" className="nav-link text-secondary">
            <FontAwesomeIcon icon={faHouseUser} className="font-weight-bold" />
            <span className="ml-3">JOB</span>
          </Link>
        </li>
        {/* Additional menu items */}
        <li className="nav-item mb-2">
          <Link to="/templates" className="nav-link text-secondary">
            Reports
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/themes" className="nav-link text-secondary">
            SAIQ Admin
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideMenuBar;
