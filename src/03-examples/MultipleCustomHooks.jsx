import { useCounter, useFecth } from '../hooks/index';
import { Character } from './Character';
import { Loading } from './Loading';

export const MultipleCustomHooks = () => {

    const { counter, increment, decrement } = useCounter(1);

    const { data, isLoading, hasError } = useFecth(`https://rickandmortyapi.com/api/character/${counter}`);
    // const { info, results } = !!data;//(!isLoading && data.length > 0) && data[0];

    // const { name, status, image, species } = !!data && data;

    return (
        <>
            <h1>Rick & Morty</h1>
            <hr />
            {
                isLoading
                    ? (
                        <Loading />
                    )
                    : (
                        <Character data={data} />
                    )
            }
            <blockquote className='blockquote text-center'>
                <button disabled={isLoading} className='btn btn-primary' onClick={() => decrement(1)}>
                    Anterior personaje
                </button>
                <button disabled={isLoading} className='btn btn-primary' onClick={() => increment(1)}>
                    Siguiente personaje
                </button>
            </blockquote>
        </>
    )
}
