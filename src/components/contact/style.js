
import styled from 'styled-components'

export const ContactSection = styled.div`
    padding: 20px;
    text-align: center
`
export const ContactTitle = styled.h2`
    font-size: 60px;
    color: black;
    margin-bottom: 30px
`
export const SPAN = styled.span`
    font-weight: normal
`

export const Form = styled.form`
    width: 70%;
    margin: auto;
`

//For all inputs
export const Input = styled.input`
    box-sizing: border-box;
    outline: 0;
    padding: 10px;
    margin-bottom: 10px
`

export const FormInput = styled.div`
    overflow: hidden
`

//High Order Component .. Inheritance
export const InputText = styled(Input)`
    float: left;
    margin: 5px;
    width: 49%;

`
export const InputEmail = styled(Input)`
    float: right;
    width: 49%;
`

export const InputSubject = styled(Input)`
    width: 100%;
    margin-bottom: 5px;
`

export const TextArea = styled.textarea`
    width: 100%;
    outline: 0;
    background: #ccc
`

export const InputSubmit = styled(Input)`
    width: 50%;
    background: #000;
    border: 1px solid #ccc;
    color: #888;
    font-weight: bold;
    cursor: pointer
`

export const Social = styled.div`
    font-size: 40px;
    text-align: center;
    margin: 0 auto;
`
export const UL = styled.ul`
    list-style-type: none;
`
export const LI = styled.li`
    display:inline; 
`


