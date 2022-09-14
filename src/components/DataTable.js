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


    /** reset sort arrow to the base arrow*/
    function resetSort() {
        setIcon1(faSort);setIcon2(faSort);setIcon3(faSort);setIcon4(faSort);setIcon5(faSort);setIcon6(faSort);setIcon7(faSort);setIcon8(faSort);setIcon9(faSort)
    }


    /**With the postion, it will sort the table ascending or descending
     * @param {number} position 
     */
    function setNextIcon(position) {
        switch (position) {
            case 1:
                if ((icon1) === faSort) {
                    resetSort()
                    setIcon1(faSortUp)
                    setData(dataSort.sort((a, b) => a.firstName.localeCompare(b.firstName)));
                } else if (icon1 === faSortUp) {
                    resetSort()
                    setIcon1(faSortDown)
                    setData(dataSort.sort((a, b) => b.firstName.localeCompare(a.firstName)));
                } else if (icon1 === faSortDown) {
                    resetSort()
                    setIcon1(faSort)
                }
                break;
            case 2:
                if ((icon2) === faSort) {
                    resetSort()
                    setIcon2(faSortUp)
                    setData(dataSort.sort((a, b) => a.lastName.localeCompare(b.lastName)));
                } else if (icon2 === faSortUp) {
                    resetSort()
                    setIcon2(faSortDown)
                    setData(dataSort.sort((a, b) => b.lastName.localeCompare(a.lastName)));
                } else if (icon2 === faSortDown) {
                    resetSort()
                    setIcon2(faSort)
                }
                break;
            case 3:
                if ((icon3) === faSort) {
                    resetSort()
                    setIcon3(faSortUp)
                    setData(dataSort.sort((a, b) => a.startDate.localeCompare(b.startDate)));
                } else if (icon3 === faSortUp) {
                    resetSort()
                    setIcon3(faSortDown)
                    setData(dataSort.sort((a, b) => b.startDate.localeCompare(a.startDate)));
                } else if (icon3 === faSortDown) {
                    resetSort()
                    setIcon3(faSort)
                }
                break;
            case 4:
                if ((icon4) === faSort) {
                    resetSort()
                    setIcon4(faSortUp)
                    setData(dataSort.sort((a, b) => a.department.localeCompare(b.department)));
                } else if (icon4 === faSortUp) {
                    resetSort()
                    setIcon4(faSortDown)
                    setData(dataSort.sort((a, b) => b.department.localeCompare(a.department)));
                } else if (icon4 === faSortDown) {
                    resetSort()
                    setIcon4(faSort)
                }
                break;
            case 5:
                if ((icon5) === faSort) {
                    resetSort()
                    setIcon5(faSortUp)
                    setData(dataSort.sort((a, b) => a.birth.localeCompare(b.birth)));
                } else if (icon5 === faSortUp) {
                    resetSort()
                    setIcon5(faSortDown)
                    setData(dataSort.sort((a, b) => b.birth.localeCompare(a.birth)));
                } else if (icon5 === faSortDown) {
                    resetSort()
                    setIcon5(faSort)
                }
                break;
            case 6:
                if ((icon6) === faSort) {
                    resetSort()
                    setIcon6(faSortUp)
                    setData(dataSort.sort((a, b) => a.street.replace(/[0-9]/g, '').localeCompare(b.street.replace(/[0-9]/g, ''))));
                } else if (icon6 === faSortUp) {
                    resetSort()
                    setIcon6(faSortDown)
                    setData(dataSort.sort((a, b) => b.street.replace(/[0-9]/g, '').localeCompare(a.street.replace(/[0-9]/g, ''))));
                } else if (icon6 === faSortDown) {
                    resetSort()
                    setIcon6(faSort)
                }
                break;
            case 7:
                if ((icon7) === faSort) {
                    resetSort()
                    setIcon7(faSortUp)
                    setData(dataSort.sort((a, b) => a.city.localeCompare(b.city)));
                } else if (icon7 === faSortUp) {
                    resetSort()
                    setIcon7(faSortDown)
                    setData(dataSort.sort((a, b) => b.city.localeCompare(a.city)));
                } else if (icon7 === faSortDown) {
                    resetSort()
                    setIcon7(faSort)
                }
                break;
            case 8:
                if ((icon8) === faSort) {
                    resetSort()
                    setIcon8(faSortUp)
                    setData(dataSort.sort((a, b) => a.state.localeCompare(b.state)));
                } else if (icon8 === faSortUp) {
                    resetSort()
                    setIcon8(faSortDown)
                    setData(dataSort.sort((a, b) => b.state.localeCompare(a.state)));
                } else if (icon8 === faSortDown) {
                    resetSort()
                    setIcon8(faSort)
                }
                break;
            case 9:
                if ((icon9) === faSort) {
                    resetSort()
                    setIcon9(faSortUp)
                    setData(dataSort.sort((a, b) => a.zipCode.localeCompare(b.zipCode)));
                } else if (icon9 === faSortUp) {
                    resetSort()
                    setIcon9(faSortDown)
                    setData(dataSort.sort((a, b) => b.zipCode.localeCompare(a.zipCode)));
                } else if (icon9 === faSortDown) {
                    resetSort()
                    setIcon9(faSort)
                }
                break;                      
            default:
              console.log(`Sorry, we are out of ${position}.`);
          }
    }

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
                <p className='dataTableText'>Search</p>
                <input type='text' className='researchBar'></input>
            </div>
        </div>
        <table className='table'>
                <thead>
                    <tr>
                        <th onClick={() => setNextIcon(1)}>{name1} <FontAwesomeIcon icon={icon1}/></th>
                        <th onClick={() => setNextIcon(2)}>{name2} <FontAwesomeIcon icon={icon2}/></th>
                        <th onClick={() => setNextIcon(3)}>{name3} <FontAwesomeIcon icon={icon3}/></th>
                        <th onClick={() => setNextIcon(4)}>{name4} <FontAwesomeIcon icon={icon4}/></th>
                        <th onClick={() => setNextIcon(5)}>{name5} <FontAwesomeIcon icon={icon5}/></th>
                        <th onClick={() => setNextIcon(6)}>{name6} <FontAwesomeIcon icon={icon6}/></th>
                        <th onClick={() => setNextIcon(7)}>{name7} <FontAwesomeIcon icon={icon7}/></th>
                        <th onClick={() => setNextIcon(8)}>{name8} <FontAwesomeIcon icon={icon8}/></th>
                        <th onClick={() => setNextIcon(9)}>{name9} <FontAwesomeIcon icon={icon9}/></th>
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