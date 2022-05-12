import React, { useEffect , useState } from 'react';
import { useParams } from 'react-router';
import Back from './Back/Back'
import styles from './EditIntern.module.css'

const EditIntern = (props) => {
    const [name, setName] = useState('');
    const [intern, setIntern] = useState([]);
    const [email, setEmail] = useState('');
    const [nameIsEmpty, setNameIsEmpty]= useState(true)
    const [emailIsEmpty, setEmailIsEmpty]= useState(true)
    const [start, setStart] = useState('');
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        start: "",
        end: "",
    })
    const [end, setEnd] = useState('');
    const { id } = useParams();

    useEffect(() => {
        const fetchInterns = async () => {
            const response = await fetch('http://localhost:3001/interns/'+id);
            const interns = await response.json();
            setIntern(interns)
            
            console.log(interns)
        }
        fetchInterns();
        console.log(`I want to get intern with id: ${id}!`)
    }, [id]);

    useEffect(() => {
        if(validdateEmail(email) || email.length == 0){
            setErrors({...errors, email: ''})
        }else{
            setErrors({...errors, email: 'invalid email'})
        }

        if(email.length==0){
            setEmailIsEmpty(true)
        }else{
            setEmailIsEmpty(false)
        }
    }, [email]);

    useEffect(() => {
        if(name == ""){
            setErrors({...errors, name: 'This field is required'})
        }else{
            setErrors({...errors, name: ''})
        }

        if(name.length==0){
            setNameIsEmpty(true)
        }else{
            setNameIsEmpty(false)
        }
    }, [name]);

    useEffect(() => {
        let launch = new Date(start)
        let termination = new Date(end)
        var milisecondsstart = launch.getTime();
        var milisecondsend = termination.getTime();

        

        if(milisecondsstart < milisecondsend || end == ""){
            setErrors({...errors, end: ''})
        }else{
            setErrors({...errors, end: 'This date is not correct'})
        }   
        
    }, [end]);

    function validdateEmail(text){
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return re.test(text);
    }


    const submit = async (e) =>{
        e.preventDefault();
        let launch = new Date(start)
        let termination = new Date(end)
        const personId = parseInt(id)
        const url = "http://localhost:3001/interns/"+id
        
        const body = JSON.stringify({id: personId,
            name: name,
            email: email,
            internshipStart: launch,
            internshipEnd: termination})

        if(errors.name == "" && errors.email == "" && errors.start == "" && errors.end == "" && emailIsEmpty == false && nameIsEmpty == false){
            const response = await fetch(url,{
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: body
            });
            const content = await response.json();
        }
        
    }

    return (
        <div>
            

            <Back titleOnList={props.titleOnList}/>

            <form className={styles.form} onSubmit={submit}>
                
                <div className={styles.inputtext}>
                    <div className='form-group'>
                        <label>Full name *</label><br/>
                        <input 
                            type="text" 
                            value={name} 
                            onChange={e => setName(e.target.value)} 
                            placeholder={intern.name}
                            className={`from-control ${errors.name ? 'is-invalid' : ''}`}/> 
                        <div className='invalid-feedback'>
                            This field is required
                        </div>
                    </div>
                </div>
            
            
                <div className={styles.inputtext}>          
                    <label>Email address *</label><br/>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder={intern.email} className={`from-control ${errors.email ? ' is-invalid' : ''}`}/>
                    <div className='invalid-feedback'>
                        {errors.email}
                    </div>
                    
                </div> 
                <div className={styles.databox}>
                    <div className={styles.data}>
                        <label>Intership start *</label><br/>
                        <input 
                            type="date" 
                            value={start} 
                            onChange={e => setStart(e.target.value)} 
                            name="start" 
                            placeholder={"DD.MM.RRRR"}/> 
                    </div>
                    <div className={styles.data}>
                        <label>Intership end *</label><br/>
                        <input 
                            type="date" 
                            value={end} 
                            onChange={e => setEnd(e.target.value)} 
                            name="end" 
                            placeholder="DD.MM.RRRR"
                            className={`from-control ${errors.end ? 'is-invalid' : ''}`}/>
                        <div className='invalid-feedback'>
                            {errors.end}
                        </div>
                    </div>
                
                </div>
                
                <button className={styles.submit}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default EditIntern;