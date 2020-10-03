import React from 'react'
import Filters from './sections/Filters'
import Pokemons from './sections/Pokemons'
import Buttons from './sections/Buttons'
import GlobalStyle, { Container } from './global/styles'

function App() {
    return (
        <>
            <Container>
                <Filters/>
                <Pokemons/>
                <Buttons/>
                <GlobalStyle/>
            </Container>
        </>
    )
}

export default App;