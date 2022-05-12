import React, { useState } from 'react';
import styles from './Container.module.css'
import EditIntern from "./EditIntern/EditIntern";
import InternLists from "./InternList/InternList";
import { Routes, Route } from "react-router-dom";
import Title from './Title/Title';

function Container() {

    const [title, setTitle] = useState("Participants");

    const titleOnEdit = () =>{
        setTitle("Edit")
    }

    const titleOnList = () =>{
        setTitle("Participants")
    }

    return(
        <div className={styles.background}>
        <container className={styles.container}>
            <Title
            title = {title}/>
            <Routes>
                <Route path="/interns/:id" exact element={<EditIntern titleOnList = {titleOnList}/>} />
                <Route path="/" element={<InternLists titleOnEdit = {titleOnEdit}/>} />
            </Routes>
        </container>
        </div>
    ); 
}

export default Container;