import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { faSortUp } from '@fortawesome/free-solid-svg-icons'
import DropdownMenu from '../components/DropdownMenu'
import React, { useState } from "react";
import '../styles/DataTable.css';

function DataTable({name1, name2, name3, name4, name5, name6, name7, name8, name9, data}) {

    const [icon, setIcon] = useState(faSort);
   
    const [nameClass, setClass] = useState('sortDouble');

    function setNextIcon() {
        if ((icon) === faSort) {
            setIcon(faSortUp)
            setClass('sortSimple')
        } else if (icon === faSortUp) {
            setIcon(faSortDown)
        } else if (icon === faSortDown) {
            setIcon(faSort)
            setClass('sortDouble')
        }
    }

    return <div className='dataTableBox'>
        <div className='numberSearch'>
            <div className='numberPages'>
                <p className='dataTableText'>Show</p>
                <select>
                {[10,20,30,40,50].map((page) => (
                                <DropdownMenu 
                                    key={`${page}`}
                                    option={page}>
                                </DropdownMenu>
                                ))}
                </select>
                <p className='dataTableText'>Entries</p>
            </div>
            <div className='searchBox'>
                <p className='dataTableText'>Search</p>
                <input type='text'></input>
            </div>
        </div>
        <table className='table'>
                <thead>
                    <tr>
                        <th onClick={setNextIcon}>{name1} <FontAwesomeIcon icon={icon} className={nameClass}/></th>
                        <th onClick={setNextIcon}>{name2} <FontAwesomeIcon icon={icon} className={nameClass}/></th>
                        <th onClick={setNextIcon}>{name3} <FontAwesomeIcon icon={icon} className={nameClass}/></th>
                        <th onClick={setNextIcon}>{name4} <FontAwesomeIcon icon={icon} className={nameClass}/></th>
                        <th onClick={setNextIcon}>{name5} <FontAwesomeIcon icon={icon} className={nameClass}/></th>
                        <th onClick={setNextIcon}>{name6} <FontAwesomeIcon icon={icon} className={nameClass}/></th>
                        <th onClick={setNextIcon}>{name7} <FontAwesomeIcon icon={icon} className={nameClass}/></th>
                        <th onClick={setNextIcon}>{name8} <FontAwesomeIcon icon={icon} className={nameClass}/></th>
                        <th onClick={setNextIcon}>{name9} <FontAwesomeIcon icon={icon} className={nameClass}/></th>
                    </tr>
                </thead>
                {data.map((user) => (
                    <tbody key={Object.values(user)[0]}>
                        <tr align="center">
                            <td>{Object.values(user)[0]}</td>
                            <td>{Object.values(user)[1]}</td>
                            <td>{Object.values(user)[2]}</td>
                            <td>{Object.values(user)[3]}</td>
                            <td>{Object.values(user)[4]}</td>
                            <td>{Object.values(user)[5]}</td>
                            <td>{Object.values(user)[6]}</td>
                            <td>{Object.values(user)[7]}</td>
                            <td>{Object.values(user)[8]}</td>
                        </tr>
                    </tbody>
                ))}
        </table>
        <div className='tableFooter'>
            <p>Showing 1 to {data.length} of {data.length} entries</p>
            <div className='previousNext'>
                <button className='tableButton'>Previous</button>
                <p className='currentPage'>1</p>
                <button className='tableButton'>Next</button>
            </div>
        </div>
    </div>
}

export default DataTable