import { useLayoutEffect, useRef, useState } from 'react';

export const Character = ({ data }) => {

    const divRef = useRef();

    const [boxSize, setBoxSize] = useState({ widht: 0, height: 0 })

    useLayoutEffect(() => {//Se podria usar igual con useEffect()
        // Obtener el tamaño del componente seleccionado mediante el useRef
        const { height, width } = divRef.current.getBoundingClientRect();
        setBoxSize({ height, width })
    }, [Character])

    const { name, status, image, species, created } = data;
    // console.log(data)
    return (
        <>
            <blockquote className='blockquote text-center'>
                <div ref={divRef} className="font-weight-bold"><h2>{name}</h2></div>
                <div >Estatus: {status}</div>
                <div>Fecha creación del personaje: {created}</div>
                <img src={image} className='rounded' />
            </blockquote>
            <code>{JSON.stringify(boxSize)}</code>
        </>
    )
}