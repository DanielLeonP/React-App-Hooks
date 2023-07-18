
export const Character = ({ data }) => {
    const { name, status, image, species, created } = data;
    // console.log(data)
    return (
        <blockquote className='blockquote text-center'>
            <div className="font-weight-bold"><h2>{name}</h2></div>
            <div >Estatus: {status}</div>
            <div>Fecha creación del personaje: {created}</div>
            <img src={image} className='rounded' />
        </blockquote>
    )
}