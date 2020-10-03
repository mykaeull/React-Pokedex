import React from 'react'
import { Container, Info, Icon } from './style'
import { MdEdit, MdDelete } from 'react-icons/md'

function CardPokemon() {
    return (
        <Container>
            <Icon>
                <MdEdit/>
            </Icon>
            <Info>
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png" alt="Charmeleon"/>
                <h5>Charmeleon</h5>
                <h6>Fogo</h6>
                <p>Capturado há 6 dias</p>
            </Info>
            <Icon>
                <MdDelete/>
            </Icon>
        </Container>
    )
}

export default CardPokemon