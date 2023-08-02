import React from 'react';
import { pageLinks , socialLinks } from '../data';
import '../styles.css';

function Footer(){
    return (
        <div className='footer'>
            <div className='footer-links'>
                {pageLinks.map(pagelink => {
                return (
                    <ul className='footer link'>
                        <li>
                            <a key={pagelink.id} href={pagelink.href}>{pagelink.text}</a>
                        </li>
                    </ul>
                    );
                })}
            </div>
            <div className='social-logos'>
                {socialLinks.map(sociallink => {
            return (
                <div>
                <a className='scoial-link' href={sociallink.href}>
                    <i className={sociallink.icon}></i>
                </a>
                </div>
                   )}
                )}
            </div>
            <p className='copyright'>Copyright © Backroads Travel Tours Company2023. All Rights Reserved</p>
        </div>
    );
};

export default Footer;