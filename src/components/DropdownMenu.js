import '../styles/DropdownMenu.css';

function DropdownMenu({data, name, id}) {

    if (data) {

    return <select name={name} id={id} className='dropdown'>
        {data.sort((a, b) => a.name.localeCompare(b.name)).map((element) => {
      return <option key={element.name} className='option'>{element.name}</option>
    })}
    </select>}
}

export default DropdownMenu