import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExperApp = () => {

    //const categorias = ['One punch', 'Samurai X', 'Dragon ball'];
    const [categorias, setCategorias] = useState(['One punch']);

    /* const handleAdd = () => {
        //setCategorias( [...categorias, 'HunterXHunter'] );
        //setCategorias( ['HunterXHunter', ...categorias] );
        setCategorias( cast => [...cast, 'HunterXHunter']);
    } */
    
    return (
        <>
            <h2>GifExperApp</h2>
            <AddCategory setCategorias={ setCategorias } />
            <hr></hr>
            <ol>
                { 
                    categorias.map( c =>  
                        <GifGrid 
                            key = { c }
                            category={ c } 
                        />
                        
                    )
                }
            </ol>
        </>
    )
}

export default GifExperApp;