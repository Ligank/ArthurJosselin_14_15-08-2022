import DropdownMenu from '../components/DropdownMenu'
import '../styles/DataTable.css';

function DataTable({name1, name2, name3, name4, name5, name6, name7, name8, name9, data}) {

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
                        <th>{name1}<div className='arrowsBox'><i className=" arrow arrow-up"></i><i className="arrow arrow-down"></i></div></th>
                        <th>{name2}<i className=" arrow arrow-up"></i><i className="arrow arrow-down"></i></th>
                        <th>{name3}</th>
                        <th>{name4}</th>
                        <th>{name5}</th>
                        <th>{name6}</th>
                        <th>{name7}</th>
                        <th>{name8}</th>
                        <th>{name9}</th>
                    </tr>
                </thead>
                {data.map((user) => (
                    <tbody key={user.firstName}>
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