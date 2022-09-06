import {states} from '../data/states'
import {departments} from '../data/departments'
import DropdownMenu from '../components/DropdownMenu'
import {Modal} from "plugin-modal-ligank"
import '../styles/form.css';

function Form() {

    function saveEmployee() {
        console.log(states[0].name)
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
                    <input id="date-of-birth" type="text" ></input>
                </div>
                <div className='inputBox'>
                    <label htmlFor="start-date">Start Date</label>
                    <input id="start-date" type="text" ></input>
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
                        <select name="state" id="state">
                        {states.sort((a, b) => a.name.localeCompare(b.name)).map((state) => (
                            <DropdownMenu 
                                key={`${state.name}`}
                                option={state.name}>
                            </DropdownMenu>
                            ))}
                        </select>
                    </div>
                    <div className='inputBoxAdress'>
                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" />
                    </div>
                </fieldset>
                <div className='inputBox'>
                    <label htmlFor="department">Department</label>
                    <select name="department" id="department">
                    {departments.sort((a, b) => a.name.localeCompare(b.name)).map((department) => (
                            <DropdownMenu 
                                key={`${department.name}`}
                                option={department.name}>
                            </DropdownMenu>
                            ))}
                    </select>
                </div>
            </form>
            <Modal buttonText={'Save'} modalText="Employee Created !" onClick={saveEmployee}></Modal>                   
            </div>
        </div>
                           
}

export default Form