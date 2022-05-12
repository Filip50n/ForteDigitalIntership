import React, { useEffect, useState } from 'react';
import Intern from './Intern/Intern';
import styles from './InternList.module.css'

const InternList = (props) => {

    const [interns, setInterns] = useState([]);

    useEffect(() => {
        const fetchInterns = async () => {
            const response = await fetch('http://localhost:3001/interns');
            console.log(response)
            const interns = await response.json();
            setInterns(interns);
            console.log(interns)
        }
        fetchInterns();
    }, []);

    return (
        
            <ul className={styles.parent}>
            {interns.map(u => (
                    
                     <Intern
                     titleOnEdit = {props.titleOnEdit}
                     name = {u.name}
                     id = {u.id}/>
                     
                ))}
            </ul>
        
    );
};

export default InternList;