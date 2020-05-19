import React from 'react';
import FooterSocial from './FooterSocial';

const Footer = () => {
    return(
        <footer className="footer">
            <FooterSocial />
            <span className="footer_copyright">
                Made with <i className="fa fa-heart"></i> by Eric Smith
            </span>
        </footer>
    )
}

export default Footer;