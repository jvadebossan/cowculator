import React from 'react' 
import styled from 'styled-components'
import cfg from '../cfg.js'

const img = require('../images/cow.png')

const Btn = styled.TouchableOpacity`
    width: 80px;
    height: 80px;
    background-color: ${props => props.color};
    color: ${cfg.colors.text}
    border: none;
    border-radius: 360px;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Img = styled.Image`
    width: 90%;
    height: 90%;
`

const Button = (props) => {
    return (
        <Btn activeOpacity={0.8} color={props.color}>
            <Img source={img}/>
        </Btn>
    )
}

export default Button