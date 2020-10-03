import styled from 'styled-components'
import { shade } from 'polished'

export const Icon = styled.div`
    border-radius: 50%;
    background-color: #D7DDF3;
    width: 32px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    transition: 0.25s;

    :hover {
        background-color: ${shade(0.2, '#D7DDF3')}
    }
`

export const Container = styled.div`
    background-color: #fff;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    padding: 12px;

    display: flex;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 250px;
        height: 250px;
    }

    h5 {
        color: #333333;
        font-weight: 700;
        font-size: 24px;
        margin-bottom: 6px;
    }

    h6 {
        color: #C59200;
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 6px;
    }

    p {
        color: #B4B4B4;
        font-weight: 600;
        font-size: 16px;
    }
`