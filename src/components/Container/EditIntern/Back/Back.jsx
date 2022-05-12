import React from 'react';
import styles from './Back.module.css'
import { NavLink } from 'react-router-dom';
import {ArrowLeft} from 'react-feather'

function Back(props) {
    return(
        <button className={styles.back} onClick={props.titleOnList}>
            <NavLink to="/">
                <ArrowLeft/>
                <label>Back to list</label>
            </NavLink>
        </button>
    ); 
}
export default Back