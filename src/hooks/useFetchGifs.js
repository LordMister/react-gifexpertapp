import { getGifs } from '../helpers/getGifs';
import { useEffect, useState } from "react"


export const useFetchGifs = ( category ) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGifs( category )
            .then(imgs =>{
                setTimeout( () =>{
                    setstate({
                    data: imgs,
                    loading:false
                    });
                });
            });
    }, [ category ])

/*     setTimeout( () => {
        setstate({
            data: [1,2,3,4,5,6,7,8],
            loading: false
        });
    }, 3000) */
    return state; //data, loading

}