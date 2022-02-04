import React from 'react' 
import styled from 'styled-components'
import cfg from '../cfg.js'
import Calc from '../Calc.js'

const Btn = styled.TouchableOpacity`
    width: 80px;
    height: 80px;
    background-color: ${props => props.color};
    border: none;
    border-radius: 360px;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Text = styled.Text`
    font-size: 40px;
    text-align: center;
    color: ${cfg.colors.text};
`

const Button = (props) => {
    return (
        <Btn activeOpacity={0.8} color={props.color}>
            <Text>{props.children}</Text>
        </Btn>
    )
}

export default Button