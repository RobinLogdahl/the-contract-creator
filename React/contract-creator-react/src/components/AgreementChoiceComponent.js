import React from 'react'
import { useState } from 'react'
import Select from 'react-select'
import NumberOfRenters from './NumberOfPartiesComponent';

function TypeOfContract() {
    const [selected, setSelected] = useState(0);
    const options = [
        { value: 0, label: 'Köpeskontrakt' },
        { value: 1, label: 'Hyreskontrakt' }
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
            <p>tjena</p> : 
            <NumberOfRenters/>}
        </div>
    )
}

export default TypeOfContract
