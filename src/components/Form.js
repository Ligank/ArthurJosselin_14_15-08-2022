import React, { useState, useEffect } from "react";
import {states} from '../data/states'
import {departments} from '../data/departments'
import DropdownMenu from './DropdownMenu'
import {Modal} from "plugin-modal-ligank"
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';
import DatePicker from "./DatePicker";
import { createUser, clearState} from "../redux/UserSlice"
import '../styles/form.css';

function Form() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isShown, setIsShown] = useState(false);

    useEffect(()=>{
        setIsShown(false)
      }, [isShown]) 
    
      function handleClick() {
        if (document.querySelector("#first-name").value !== '' && document.querySelector("#last-name").value !== '' && document.querySelector("#street").value !== '' && document.querySelector("#city").value !== '' && document.querySelector("#zip-code").value !== '' && document.querySelectorAll('#state').value !== '' && document.querySelectorAll('#department').value !== '') {
            dispatch(createUser())
            setIsShown(true)
        } else {
            dispatch(clearState())
            alert('Not all fields are filled in')
        }
      }

    return <div className='form'>
        <div className="container">
            <h2 className='titleH2'>Create Employee</h2>
            <form action="#" id="create-employee">
                <div className='inputBox'>
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" className='inputText' />
                </div>
                <div className='inputBox'>
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" className='inputText'/>
                </div>
                <div className='inputBox'>
                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <DatePicker id='date-of-birth'/>
                </div>
                <div className='inputBox'>
                    <label htmlFor="start-date">Start Date</label>
                    <DatePicker id='start-date'/>
                </div>
                <fieldset className='address'>
                    <legend>Address</legend>
                    <div className='inputBoxAdress'>
                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" />
                    </div>
                    <div className='inputBoxAdress'>
                        <label htmlFor="city">City</label>
                        <input id="city" type="text" />
                    </div>
                    <div className='inputBoxAdress'>
                        <label htmlFor="state">State</label>
                        <DropdownMenu data={states} name='state' id='state'/>
                    </div>
                    <div className='inputBoxAdress'>
                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" />
                    </div>
                </fieldset>
                <div className='inputBox'>
                    <label htmlFor="departments">Department</label>
                    <DropdownMenu data={departments} name='department' id='department'/>
                </div>
            </form>
            <button onClick={handleClick}>Confirm</button>
            <Modal modalText="Employee Created !" show={isShown} closeAction={() => navigate("/currentEmployees")}></Modal>                   
            </div>
        </div>
                           
}

export default Form