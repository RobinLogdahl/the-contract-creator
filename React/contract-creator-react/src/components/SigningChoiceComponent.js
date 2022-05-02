import React from 'react'
import { useState } from 'react'
import Select from 'react-select'

function TypeOfSign() {
    const [selected, setSelected] = useState(0);
    const options = [
        { value: 0, label: 'Pappers signering' },
        { value: 1, label: 'E-Signering' }
    ]
    const handleChange = (e) => setSelected(e.value)
    
    return (
        <div className='select'>
            <Select
                defaultValue={selected}
                onChange={e => handleChange(e)}
                options={options}>
            </Select>
            {selected == 0 ?
            <p>Pappers sign</p> : 
            <p>E-sign</p>}
            <button>Submit</button>
        </div>
    )
}

export default TypeOfSign;