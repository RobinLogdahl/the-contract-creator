import React from 'react'
import { useState } from 'react'
import Select from 'react-select'
import TypeOfSign from './SigningChoiceComponent';

function NumberOfRenters() {
    const [selected, setSelected] = useState(0);
    const options = [
        { value: 2, label: '1 Hyregäst' },
        { value: 3, label: '2 Hyresgäster' }
    ]
    const handleChange = (e) => {
        setSelected(e.value)
        sessionStorage.removeItem(`2-key`);
        sessionStorage.removeItem(`3-key`);
        sessionStorage.setItem(`${e.value}-key`, e.label);
    }
    
    return (
        <div className='select'>
            <Select
                defaultValue={selected}
                onChange={e => handleChange(e)}
                options={options}>
            </Select>
            {selected == 2 ?
            <p>tjena</p> : 
            <TypeOfSign/>}
        </div>
    )
}

export default NumberOfRenters;