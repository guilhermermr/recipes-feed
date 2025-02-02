import styled from "styled-components";

const Button = styled.button`

    background-color: ${props => props.primary ? '#4CAF50' : '#e7e7e7'};
    color: ${props => props.primary ? 'white' : 'black'};
    padding: 15px 32px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    
    &:hover {
        background-color: ${props => props.primary ? '#45a049' : '#ddd'};
    }

`

export default Button