import React, {Component} from 'react';
import styled from "styled-components";

const Container = styled.section `
    background-color: #14213d;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    gap: 20px;
`
const Caixaentrada = styled.div `
    display: flex;
    flex-flow: row wrap;
    width: 25vw;
    height: 400px;
    border: solid;
    border-radius: 10px;
    background-color: #000;
    justify-content: center;
    align-items: center;

    input {
        background-color: #e5e5e5;
        font-size: 38px;
        height: 40px;
        width: 20vw;
        border: none;
        border-radius: 2px;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    button {
        border-radius: 100%;
        width: 70px;
        height: 70px;
        margin: 5px;
        font-size: 40px;
        border: none;
        background-color: #fca311;
        color: #fefae0;
        cursor: pointer;
    }
`
const Caixaresultado = styled.p `
    background-color: #fefae0;
    border-radius: 10px;
    font-size: 40px;
`

export default class Main extends Component {
    state = {
        valor1: "",
        valor2: "",
        result:0
    }

    changeUm = (event) => {
        this.setState({
            valor1: Number(event.target.value)
        })
    }

    changeDois = (event) => {
        this.setState({
            valor2: Number(event.target.value)
        })
    }

    soma = () => {
        this.setState({
            result: this.state.valor1 + this.state.valor2,
            valor1:"",
            valor2:""
        })
    }

    subtrai = () => {
        this.setState({
            result: this.state.valor1 - this.state.valor2,
            valor1:"",
            valor2:""
        })
    }

    multiplica = () => {
        this.setState({
            result: this.state.valor1 * this.state.valor2,
            valor1:"",
            valor2:""
        })
    }

    divide = () => {
        this.setState({
            result: this.state.valor1 / this.state.valor2,
        })
    }

    clear = () => {
        this.setState ({
            valor1: "",
            valor2: "",
            result: 0
        })
    }

    render () {
        return (
            <Container>
                <Caixaentrada>
                    <input type='number' value={this.state.valor1} onChange={this.changeUm}></input>
                    <input type='number' value={this.state.valor2} onChange = {this.changeDois}></input>
                    <button onClick={this.soma}>+</button>
                    <button onClick={this.subtrai}>-</button>
                    <button onClick={this.multiplica}>*</button>
                    <button onClick={this.divide}>/</button>
                    <button onClick={this.clear}>C</button>  
                </Caixaentrada>
                <Caixaresultado> = {this.state.result}</Caixaresultado>
            </Container>
        )
    }
}