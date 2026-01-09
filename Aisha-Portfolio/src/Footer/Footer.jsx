
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerWrapper}>
                <div className={styles.footerContent}>
                    <h2>ASIM SWATI</h2>
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
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Impact</a></li>
                            <li><a href="#">Product</a></li>
                            <li><a href="#">Gallery</a></li>
                        </ul>
                    </div>
                </div>

            </div>
            <hr />
            <p>© 2025 ASIM SWATI. All rights reserved.| www.creatorsblueprint.net</p>




        </div>
    );
};

export default Footer;
