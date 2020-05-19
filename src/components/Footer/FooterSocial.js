import React from 'react';

const FooterSocial = () => {
    return(
        <ul className="footer_social">
            <li>
                <a href="https://github.com/ericsmith92">
                    <i class="fa fa-github brand-icon"></i>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/smitheric92/">
                    <i class="fa fa-linkedin-square brand-icon"></i>
                </a>
            </li>
            <li>
                <a href="http://helloericsmith.com/resume.pdf">
                    <i class="fa fa-file-text" aria-hidden="true"></i>
                </a>
            </li>
        </ul>
    )
}

export default FooterSocial;
