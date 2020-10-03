import React from 'react'
import Title from '../../components/Title'
import CardPokemon from '../../components/cardpokemons'
import { Container } from './style'

function Pokemons() {

    
    return (
        <Container>
            <Title/>
            <CardPokemon/>
        </Container>
    )
}

export default Pokemons;