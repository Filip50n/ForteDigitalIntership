import React from 'react';
import logo from './logo.svg'
import styles from './Photo.module.css'

function Photo() {
    return (
        <photo className={styles.photo}>
            <img src={logo}></img>
        </photo>
    );
}

export default Photo;