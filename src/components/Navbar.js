import React from 'react';
import '../styles.css';
import logo from '../images/logo.svg';
import { pageLinks } from '../data';
import { socialLinks } from '../data';

function Navbar(){
    return(
        <div className='Navbar'>
            <img src={logo} alt='site logo'/>
            <div className='links'>
                {pageLinks.map(pagelink => {
                return (
                    <ul className='navbar-list'>
                        <li>
                            <a key={pagelink.id} href={pagelink.href}>{pagelink.text}</a>
                        </li>
                    </ul>
                    );
                })}
            </div>
          <div>
            {socialLinks.map(sociallink => {
            return (
                <>
                <a href={sociallink.href}>
                    <i className={sociallink.icon}></i>
                </a>
                </>
            )
        })}
          </div>
        </div>
    );
}

export default Navbar;