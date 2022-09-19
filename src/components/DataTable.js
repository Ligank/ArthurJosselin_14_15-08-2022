/* eslint-disable no-eval */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { faSortUp } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from "react";
import '../styles/DataTable.css';

function DataTable({name1, name2, name3, name4, name5, name6, name7, name8, name9, data}) {

    const [icon1, setIcon1] = useState(faSort);
    const [icon2, setIcon2] = useState(faSort);
    const [icon3, setIcon3] = useState(faSort);
    const [icon4, setIcon4] = useState(faSort);
    const [icon5, setIcon5] = useState(faSort);
    const [icon6, setIcon6] = useState(faSort);
    const [icon7, setIcon7] = useState(faSort);
    const [icon8, setIcon8] = useState(faSort);
    const [icon9, setIcon9] = useState(faSort);
    const [dataSort, setData] = useState(data);
    
    /**With the postion and the name, it will sort the table ascending or descending
     * @param {number} position get the correct state
     * @param {string} name get the name of the property sorted
     */
    function setNextIcon(position, name) {
        setIcon1(faSort);setIcon2(faSort);setIcon3(faSort);setIcon4(faSort);setIcon5(faSort);setIcon6(faSort);setIcon7(faSort);setIcon8(faSort);setIcon9(faSort)
        if ((eval('icon' + position)) === faSort) {
            (eval('setIcon' + position)(faSortUp));
            setData(dataSort.sort((a, b) => a[name].localeCompare(b[name])));
        } else if ((eval('icon' + position)) === faSortUp) {
            eval('setIcon' + position)(faSortDown)
            setData(dataSort.sort((a, b) => b[name].localeCompare(a[name])));
        } else if ((eval('icon' + position)) === faSortDown) {
            eval('setIcon' + position)(faSort)
        }
    }

    /**research all table when input in the research*/
    useEffect(() => {
        let researchBox = document.querySelector('.researchBar');
        researchBox.addEventListener("input", () => {
            const filtreText = (arr, requete) => {
                return arr.filter(el =>  el.toLowerCase().indexOf(requete.toLowerCase()) !== -1);
            };
            document.querySelectorAll(".lignTable").forEach(element => {
                let childClasses = [];
                element.childNodes.forEach(child => {
                    childClasses.push(child.classList.value)
                    
                })
                let resultResearch = filtreText(childClasses, researchBox.value.replace(/['\s%\s(\s)]/g, "").replace(/é/g, "e").replace(/è/g, "e").replace(/â/g, "a"));
                if (resultResearch.length > 0) {
                    element.style.display = "";
                } else {
                    element.style.display = "none";
                }
            })
        });
      }, []);

    return <div className='dataTableBox'>
        <div className='numberSearch'>
            <div className='numberPages'>
                <p className='dataTableText'>Show</p>
                <select>
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                    <option>40</option>
                    <option>50</option>
                    <option>60</option>
                </select>
                <p className='dataTableText'>Entries</p>
            </div>
            <div className='searchBox'>
                <label htmlFor='researchBar' className='dataTableText'>Search</label>
                <input type='text' className='researchBar' id='researchBar'></input>
            </div>
        </div>
        <table className='table'>
                <thead>
                    <tr>
                        <th onClick={() => setNextIcon(1, 'firstName')}>{name1} <FontAwesomeIcon icon={icon1}/></th>
                        <th onClick={() => setNextIcon(2, 'lastName')}>{name2} <FontAwesomeIcon icon={icon2}/></th>
                        <th onClick={() => setNextIcon(3, 'startDate')}>{name3} <FontAwesomeIcon icon={icon3}/></th>
                        <th onClick={() => setNextIcon(4, 'department')}>{name4} <FontAwesomeIcon icon={icon4}/></th>
                        <th onClick={() => setNextIcon(5, 'birth')}>{name5} <FontAwesomeIcon icon={icon5}/></th>
                        <th onClick={() => setNextIcon(6, 'street')}>{name6} <FontAwesomeIcon icon={icon6}/></th>
                        <th onClick={() => setNextIcon(7, 'city')}>{name7} <FontAwesomeIcon icon={icon7}/></th>
                        <th onClick={() => setNextIcon(8, 'state')}>{name8} <FontAwesomeIcon icon={icon8}/></th>
                        <th onClick={() => setNextIcon(9, 'zipCode')}>{name9} <FontAwesomeIcon icon={icon9}/></th>
                    </tr>
                </thead>
                {data.map((user) => (
                    <tbody key={Object.values(user)[0] + Object.values(user)[2] }>
                        <tr align="center" className='lignTable'>
                            <td className={Object.values(user)[0]}>{Object.values(user)[0]}</td>
                            <td className={Object.values(user)[1]}>{Object.values(user)[1]}</td>
                            <td className={Object.values(user)[2]}>{Object.values(user)[2]}</td>
                            <td className={Object.values(user)[3]}>{Object.values(user)[3]}</td>
                            <td className={Object.values(user)[4]}>{Object.values(user)[4]}</td>
                            <td className={Object.values(user)[5]}>{Object.values(user)[5]}</td>
                            <td className={Object.values(user)[6]}>{Object.values(user)[6]}</td>
                            <td className={Object.values(user)[7]}>{Object.values(user)[7]}</td>
                            <td className={Object.values(user)[8]}>{Object.values(user)[8]}</td>
                        </tr>
                    </tbody>
                ))}
        </table>
        <div className='tableFooter'>
            <p>Showing 1 to {data.length} of {data.length} entries</p>
            <div className='previousNext'>
                <button className='tableButton'>Previous</button>
                <select>
                    <option>1</option>
                </select>
                <button className='tableButton'>Next</button>
            </div>
        </div>
    </div>
}

export default DataTable