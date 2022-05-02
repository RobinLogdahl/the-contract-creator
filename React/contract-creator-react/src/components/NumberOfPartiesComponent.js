import React from 'react'
import { useState } from 'react'
import Select from 'react-select'
import TypeOfSign from './SigningChoiceComponent';

function NumberOfRenters() {
    const [selected, setSelected] = useState(0);
    const options = [
        { value: 0, label: '1 Hyregäst' },
        { value: 1, label: '2 Hyresgäster' }
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
            <TypeOfSign/>}
        </div>
    )
}

export default NumberOfRenters;