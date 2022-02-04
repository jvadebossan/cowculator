import React, { useState } from 'react' 
import styled from 'styled-components'
import cfg from './cfg.js'
import Calc from './Calc.js'

//components 
import Button from './components/Button'
import ButtonImg from './components/ButtonImg'

const Bg = styled.SafeAreaView`
  background-color: ${cfg.colors.background};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`

const Buttons = styled.View`
  width: 100%;
  height: 69%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px 10px;

`

const Result = styled.Text`
  color: ${cfg.colors.text};
  font-size: 85px;
  text-align: right;
  width: 100%;
  padding-right: 10px;
  position: relative;
  top: 10px;
`

const btnValues = [
  ["C", "%", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const btnColors = [
  cfg.colors.secondary, cfg.colors.secondary, cfg.colors.secondary, cfg.colors.primary,
  cfg.colors.background2, cfg.colors.background2, cfg.colors.background2, cfg.colors.primary,
  cfg.colors.background2, cfg.colors.background2, cfg.colors.background2, cfg.colors.primary,
  cfg.colors.background2, cfg.colors.background2, cfg.colors.background2, cfg.colors.primary,
  cfg.colors.background2, cfg.colors.background2, cfg.colors.background2
];


const App = () =>{

  return(
    <Bg>
      <Result>{Calc()}</Result>
      <Buttons>
        {
          btnValues.flat().map((btn, index) => {
            return(
              <Button key={index} color={btnColors[index]}>{btn}</Button>
            )
          })
        }
        <ButtonImg color={cfg.colors.primary}/>
      </Buttons>
    </Bg>
  )
}


export default App