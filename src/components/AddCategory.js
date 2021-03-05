import React, { useState } from 'react'
import ProTypes from 'prop-types';

export const AddCategory = ({ setCategorias }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();


        if ( inputValue.trim().length>2 ){
            setCategorias( cast => [inputValue, ...cast]);
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                    type="text"
                    value={ inputValue }
                    onChange={ handleInputChange }
                />
        </form>
    )
}

AddCategory.ProTypes = {
    setCategorias: ProTypes.func.isRequired
}
