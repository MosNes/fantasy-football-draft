//Footer component
import React from 'react';
import * as FaIcons from 'react-icons/fa';

const Footer = () => {
  return (
    <section>
      <div className="footer-container">
        <h2> Contact Us </h2>
        <a href="mailto:yaysportsdraft@gmail.com">Email</a>
      </div>

      <div className="footer-container">
        <h2> Follow Us </h2>
        <a href="www.twitter/yaysportsdraft"
          className="twitter">
          <FaIcons.FaTwitter size="30px" />
        </a>
        <a href="https://github.com/MosNes/fantasy-football-draft.git"
          className="github">
          <FaIcons.FaGithub size="30px" />
        </a>
        <a href="https://www.instagram.com/yaysportsdraft/"
          className="instagram">
          <FaIcons.FaInstagram size="30px" />
        </a>
      </div>

      <div className="footer-container">
        <h2> Contributors </h2>
        <ul>
          <li>Cody Cooper</li>
          <li>Dejuan Strong</li>
          <li>Mackenzie Abe</li>
          <li>McKinley Faustin</li>
          <li>Moses Nester</li>
        </ul>
      </div>

</section>
  )
}

export default Footer;