import { PokemonContext } from '../context/PokemonContext';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const PokemonInfo = () => {
    const { getPokemonByID } = useContext(PokemonContext);

    // Simple Hooks state
    const [loading, setLoading] = useState(true);
	const [pokemon, setPokemon] = useState({});

    const { id } = useParams();
    return(
        <div>

        </div>
    )
}