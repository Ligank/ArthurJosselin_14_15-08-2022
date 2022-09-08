import React, { useState, useEffect } from "react";
import {states} from '../data/states'
import {departments} from '../data/departments'
import DropdownMenu from './DropdownMenu'
import {Modal} from "plugin-modal-ligank"
import DatePicker from "./DatePicker";
import '../styles/form.css';

function Form() {

    const [isShown, setIsShown] = useState(false);

    useEffect(()=>{
        setIsShown(false)
      }, [isShown]) 
    
      function handleClick() {
        
          setIsShown(true)
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
                    <DatePicker/>
                    {/*<input id="date-of-birth" type="text" ></input>*/}
                </div>
                <div className='inputBox'>
                    <label htmlFor="start-date">Start Date</label>
                    <DatePicker/>
                    {/*<input id="start-date" type="text" ></input>*/}
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
                    <label htmlFor="department">Department</label>
                    <DropdownMenu data={departments} name='department' id='department'/>
                </div>
            </form>
            <button onClick={handleClick}>Confirm</button>
            <Modal modalText="Employee Created !" show={isShown}></Modal>                   
            </div>
        </div>
                           
}

export default Form