import React, {Component} from 'react';
import styled from "styled-components";

const Container = styled.section `
    background-color: #14213d;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    gap: 20px;

    h2 {
        color: #fff;
        text-transform: uppercase;
        font-size: 40px;
    }
`
const Caixaentrada = styled.div `
    display: flex;
    flex-flow: row wrap;
    width: 350px;
    height: 450px;
    border: solid;
    border-radius: 10px;
    background-color: #000;
    justify-content: center;
    align-items: center;
    

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

const Visor = styled.div `
        display: flex;
        background-color: #e5e5e5;
        font-size: 38px;
        height: 50px;
        width: 300px;
        border: none;
        border-radius: 5px;
        align-items: center;

        p {
            font-family: 'Calculator', sans-serif;
            color: green;
            font-size: 40px;
        }
     
`

export default class Main extends Component {
    state = {
        valor1: "",
        valor2: "",
        result:'',
        sinal: "",
        sinalIgual: "",
        trocaValor: 0,
        alerta:""
    }

    Calc = (event) => {
        if (this.state.valor1 == "") {
          this.setState({
            alerta:"Digite um valor"
          })
        } else if (this.state.trocaValor === 0) {
          this.setState({
            sinal: event.target.innerHTML,
            trocaValor: this.state.trocaValor + 1
          })
        } else if (this.state.trocaValor === 1) {
            this.setState ({
                valor1: this.state.result,
                sinal: event.target.innerHTML,
                valor2:'',
                result:''
            })
        }
    }

    Equal = (event) => {
        if (this.state.sinal == "+") {
            this.setState ({
                result: Number(this.state.valor1) + Number(this.state.valor2),
                sinalIgual:'='
            })
        }else if (this.state.sinal == "-") {
            this.setState ({
                result: Number(this.state.valor1) - Number(this.state.valor2),
                sinalIgual:'='
            })
        }else if (this.state.sinal == "x") {
            this.setState ({
                result: Number(this.state.valor1) * Number(this.state.valor2),
                sinalIgual:'='
            })
        }else if (this.state.sinal == "÷") {
            this.setState ({
                result: Number(this.state.valor1) / Number(this.state.valor2),
                sinalIgual:'='
            })
        }
    }

    Number = (event) => {
        if (this.state.trocaValor === 0) {
          this.setState({
            valor1: this.state.valor1 + event.target.innerHTML,
            alerta:"",
          })
        } else if (this.state.trocaValor === 1) {
          this.setState({
            valor2: this.state.valor2 + event.target.innerHTML
          })
        }
    }

    Clear = () => {
        this.setState ({
            valor1: "",
            valor2: "",
            result:'',
            sinal: "",
            sinalIgual: "",
            trocaValor: 0,
            alerta:""
        })
    }

    render() {
        return (
            <Container>
                <h2>Calculator</h2>
                <Caixaentrada>
                    <Visor>
                        <p>{this.state.alerta}</p>
                        <p>{this.state.valor1}</p>
                        <p>{this.state.sinal}</p>
                        <p>{this.state.valor2}</p>
                        <p>{this.state.sinalIgual}</p>
                        <p>{this.state.result}</p>
                    </Visor>
                    <button onClick={this.Number}>7</button>
                    <button onClick={this.Number}>8</button>
                    <button onClick={this.Number}>9</button>
                    <button onClick={this.Calc}>+</button>
                    <button onClick={this.Number}>4</button>
                    <button onClick={this.Number}>5</button>
                    <button onClick={this.Number}>6</button>
                    <button onClick={this.Calc}>-</button>
                    <button onClick={this.Number}>1</button>
                    <button onClick={this.Number}>2</button>
                    <button onClick={this.Number}>3</button>
                    <button onClick={this.Calc}>x</button>
                    <button onClick={this.Number}>0</button>
                    <button onClick={this.Equal}>=</button>
                    <button onClick={this.Clear}>C</button>
                    <button onClick={this.Calc}>÷</button>
                </Caixaentrada>
            </Container>
        )
    }
}
