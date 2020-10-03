import React from 'react'
import { Container, Icon, Button } from './style'
import { MdAdd, MdSearch } from 'react-icons/md'

function Buttons() {

    
    return (
        <Container>
            <Button>
                <Icon>
                    <MdAdd/>
                </Icon>
                <h6>Adicionar Pokemon</h6>
            </Button>
            <Button>
                <Icon>
                    <MdSearch/>
                </Icon>
                <h6>Pesquisar Pokemon</h6>
            </Button>
        </Container>
    )
}

export default Buttons;