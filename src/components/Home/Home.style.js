import styled from 'styled-components'

export const ImageContainer = styled.div`
    height: 100vh;
    background: url('${require('../../assets/faiz.jpg')}');
    background-repeat: no-repeat;
    background-position: center;

    display: flex;
    flex-direction: column;
    justify-content: center;

    text-align: center;

    color: #ffffff;
    padding-top: 10em;

    margin-bottom: 0;
    text-transform: uppercase;

    h1 {
        font-weight: 900;
        font-size: 3em;
    }

    h2 {
        font-weight: 400;
        font-size: 1.8em;
    }
`