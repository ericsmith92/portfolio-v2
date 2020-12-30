import React from 'react';

const FooterSocial = () => {
    return(
        <ul className="footer_social">
            <li>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/ericsmith92">
                    <i className="fa fa-github brand-icon"></i>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/smitheric92/">
                    <i className="fa fa-linkedin-square brand-icon"></i>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1jEuoDuCtq8BvN38TAGeL6udGGIevEFXd/view?usp=sharing">
                    <i className="fa fa-file-text" aria-hidden="true"></i>
                </a>
            </li>
        </ul>
    )
}

export default FooterSocial;
