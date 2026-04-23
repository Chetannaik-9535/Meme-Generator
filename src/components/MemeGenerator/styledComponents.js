// Style your components here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  background-size: cover;
  height: 100vh;
  padding: 30px;
`
export const MemeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: transparent;
  background-size: cover;
  height: 100vh;
  width: 50vw;
  margin: 7%;
  margin-top: 4%;
`

export const MemeGeneratorForm = styled.form`
  background-color: transparent;
  background-size: cover;
  height: 100vh;
  display : flex;
  flex-direction : column;

`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 40px;
  color: #1e293b;
  font-weight: bold;
`

export const Label = styled.label`
  font-family: 'sans-serif';
  font-size: 13px;
  color: #7e858e;
  font-weight: bold;
  margin: 7px;
`
export const Input = styled.input`
  font-family: 'sans-serif';
  font-size: 12px;
  color: #5a7184;
  font-weight: none;
  background-color: transparent;
  background-size: cover;
  height: 25px;
  width: 28vw;
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #d7dfe9;
`

export const Select = styled.select`
  font-family: 'sans-serif';
  font-size: 12px;
  color: #0b69ff;
  font-weight: normal;
  background-color: transparent;
  background-size: cover;
  height: 25px;
  width: 28vw;
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #d7dfe9;
`

export const CustomButton = styled.button`
  background-color: #0b69ff;
  background-size: cover;
  height: 40px;
  width: 120px;
  border: none;
  margin: 10px;
  border-radius: 6px;
  font-family: 'Roboto';
  font-size: 14px;
  color: #ffffff;
  font-weight: bold;
  border: none;
  cursor: pointer;
`
export const CustomOption = styled.option`
  background-color: #ffffff;
  background-size: cover;
  height: 30px;
  color: black;
  font-weight: bold;
`
export const MemeContainer = styled.div`
  background-image : url(${props => props.backgroundImgUrl});
  background-size: cover;
  height : 30vh;
  width : 30vw;
  margin-top : 20px;
`
export const TextContent = styled.p`
  font-family: 'sans-serif';
  font-size: ${props => props.activeFontSize}px;
  color: #ffffff;
  font-weight: bold;
  height : 30vh;
  width : 30vw;
`
