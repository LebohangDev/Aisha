
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerWrapper}>
                <div className={styles.footerContent}>
                    <img src="Images/Logos/footer_logo.svg" alt="Brand Logo" className={styles.brandLogo} />
                    <div className={styles.media}>
                        <p>Media</p>
                        <div className={styles.socialIcons}>
                            <i className="ri-instagram-line"></i>
                            <i className="ri-youtube-line"></i>
                            <i className="ri-facebook-line"></i>
                        </div>
                    </div>
                    <div className={styles.footerNav}>
                        <ul>
                            <li><a href="#Home">Home</a></li>
                            <li><a href="#Recognition">Recognition</a></li>
                            <li><a href="#Product">Product</a></li>
                            <li><a href="#Gallery">Gallery</a></li>
                        </ul>
                    </div>
                </div>

            </div>
            <hr />
            <p>© 2025 Aisha Ray. All rights reserved. | www.creatorsblueprint.net</p>




        </div>
    );
};

export default Footer;
