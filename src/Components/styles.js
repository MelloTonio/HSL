import styled from 'styled-components';

const Button = styled.button`
    color: white;
    border: 1px solid var(--white);
    font-weight: bold;
    background-color: black;
    font-size: 16px;
    border-radius: 4px;
    padding: 4px 8px;
    text-decoration: none;
    transition: opacity .3s;
    &:hover,
    &:focus{
        opacity: .5
    }
    
    @media(max-width: 800px){
    color: white;
    border: 1px solid var(--white);
    font-weight: bold;
    background-color: black;
    font-size: 16px;
    border-radius: 4px;
    padding: 4px 8px;
    text-decoration: none;
    transition: opacity .3s;
    &:hover,
    &:focus{
        opacity: .5
    }
`;

export default Button;