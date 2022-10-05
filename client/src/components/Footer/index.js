//Footer component
import { isNonEmptyArray } from '@apollo/client/utilities';
import React from 'react';
import { FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';
import Dropdown from 'react-bootstrap/Dropdown';
import './footer.css'



const Footer = () => {
  return (
    <footer className="fixed-bottom d-flex justify-content-evenly">
      <div className="footer-container">
        <p> Contact Us </p>
        <a className="email" href="mailto:yaysportsdraft@gmail.com">Email Us</a>
      </div>

      <div className="footer-container">
        <p> Follow Us </p>
        <a href="https://twitter.com/yaysportsdraft/status/1577691029989466112?s=20&t=LuoVfOQIaQ59x4AvHFW1iA"
          className="twitter">
          <FaTwitter size="30px" />
        </a>
        <a href="https://github.com/MosNes/fantasy-football-draft.git"
          className="github">
          <FaGithub size="30px" />
        </a>
        <a href="https://www.instagram.com/yaysportsdraft/"
          className="instagram">
          <FaInstagram size="30px" />
        </a>
      </div>

      <div className="footer-container">
      <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
       Contributors
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item >Cody Cooper</Dropdown.Item>
        <Dropdown.Item>Dejuan Strong</Dropdown.Item>
        <Dropdown.Item>Mackenzie Abe</Dropdown.Item>
        <Dropdown.Item>McKinley Faustin</Dropdown.Item>
        <Dropdown.Item>Moses Nester</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </div>
</footer>
  )
}

export default Footer;