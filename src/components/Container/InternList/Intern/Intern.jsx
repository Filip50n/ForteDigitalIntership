import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Intern.module.css'
import {Edit3} from 'react-feather'

function Intern(props) {
    

    return(
        <li className={styles.intern}>
            {props.name}
            <NavLink to={`/interns/${props.id}`}>
                <button className={styles.edit} onClick={props.titleOnEdit}>
                    <Edit3/>
                    <label>Edit</label>
                </button>
            </NavLink>
        </li>
    );
}

export default Intern;