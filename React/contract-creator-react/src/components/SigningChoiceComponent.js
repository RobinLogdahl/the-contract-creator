import React from 'react'
import { useState } from 'react'
import Select from 'react-select'

function TypeOfSign() {
    const [selected, setSelected] = useState(0);
    const options = [
        { value: 4, label: 'Pappers signering' },
        { value: 5, label: 'E-Signering' }
    ]
    
    const handleSubmit = (e) => {
        const type1 = sessionStorage.getItem(`0-key`);
        const type2 = sessionStorage.getItem(`1-key`);
        const renter1 = sessionStorage.getItem(`2-key`);
        const renter2 = sessionStorage.getItem(`3-key`);
        const sign1 = sessionStorage.getItem(`4-key`);
        const sign2 = sessionStorage.getItem(`5-key`);
        console.log(type1, type2, renter1, renter2, sign1, sign2);

        if (type2 === 'Hyreskontrakt' && renter2 === '2 Hyresgäster' && sign1 === 'Pappers signering') {
            console.log('Generera form')
        }


    }
    const handleChange = (e) => {
        setSelected(e.value)
        sessionStorage.removeItem(`4-key`);
        sessionStorage.removeItem(`5-key`);
        sessionStorage.setItem(`${e.value}-key`, e.label);
    }
    
    return (
        <div className='select'>
            <Select
                defaultValue={selected}
                onChange={e => handleChange(e)}
                options={options}>
            </Select>
            {selected === 4 ?
            <p>Pappers sign</p> : 
            <p>E-sign</p>}
            <button onClick={handleSubmit}>Generera avtal</button>
        </div>
    )
}

export default TypeOfSign;