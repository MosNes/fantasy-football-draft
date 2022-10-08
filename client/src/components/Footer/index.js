//Footer component
import { isNonEmptyArray } from '@apollo/client/utilities';
import React from 'react';
import { FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import './footer.css'



const Footer = () => {
  return (
    <footer className="fixed-bottom d-flex justify-content-end justify-content-end bg-dark px-3">
      <div className="footer-container">
        <a className="email" href="mailto:yaysportsdraft@gmail.com">Email Us</a>
      </div>
      <div className="footer-container">

        {/* <p className='follow'> Follow Us </p> */}
        <a href="www.twitter/yaysportsdraft"

          className="twitter">
          <FaTwitter size="30px" color='white'/>
        </a>
        <a href="https://github.com/MosNes/fantasy-football-draft.git"
          className="github">
          <FaGithub size="30px" color='white'/>
        </a>
        <a href="https://www.instagram.com/yaysportsdraft/"
          className="instagram">
          <FaInstagram size="30px" color='white' />
        </a>
      </div>

      <div className="mt-2">
        {['up'].map((direction) => (
          <DropdownButton
            as={ButtonGroup}
            key={direction}
            id={`dropdown-button-drop-${direction}`}
            drop={direction}
            variant="secondary"
            title={` Contributors`}
          >
            <Dropdown.Item eventKey="1">Cody Cooper</Dropdown.Item>
            <Dropdown.Item eventKey="2">Dejuan Strong</Dropdown.Item>
            <Dropdown.Item eventKey="3">Mackenzie Abe</Dropdown.Item>
            <Dropdown.Item eventKey="4">McKinley Faustin</Dropdown.Item>
            <Dropdown.Item eventKey="4">Moses Nester</Dropdown.Item>
          </DropdownButton>
        ))}
      </div>
</footer>
  )
}

export default Footer;