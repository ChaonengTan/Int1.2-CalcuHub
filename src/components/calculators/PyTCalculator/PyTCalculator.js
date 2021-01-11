import { Component } from 'react'
import './PyTCalculator.css'
class PyTCalculator extends Component{
    constructor (props){
        super(props)
        this.state={
            valA: 0,
            valB: 0, 
            valC: 0
        }
    }
    render (){
        return(
            <form className='form'>
                <div className='center'>
                    <h1>Pythagorean Theorum: A&sup2;+B&sup2;=C&sup2;</h1>
                    <div className='sentence'>
                        <div className='letter'>
                            <div className='upper'>
                                <label for="ValA">ValA: </label>
                                <input
                                    id='ValA'
                                    placeholder = 'ValA'
                                    type = 'number'
                                    value = {this.state.valA}
                                    onChange = {(e) => {this.setState({valA: e.target.value})}}
                                />&sup2;
                            </div>
                            <button onClick={(e) => {this.calculateA()}}>Calculate A</button>
                        </div>
                        +
                        <div className='letter'>
                            <div className='upper'>
                                <label for="ValB">ValB: </label>
                                <input
                                    id='ValB'
                                    placeholder = 'ValB'
                                    type = 'number'
                                    value = {this.state.valB}
                                    onChange = {(e) => {this.setState({valB: e.target.value})}}
                                />&sup2;
                            </div>
                            <button onClick={(e) => {this.calculateB()}}>Calculate B</button>
                        </div>
                        =
                        <div className='letter'>
                            <div className='upper'>
                                <label for="ValC">ValC: </label>
                                <input
                                    id='ValC'
                                    placeholder = 'ValC'
                                    type = 'number'
                                    value = {this.state.valC}
                                    onChange = {(e) => {this.setState({valC: e.target.value})}}
                                />&sup2;
                            </div>
                            <button onClick={(e) => {this.calculateC()}}>Calculate C</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
    calculateA() {
        this.setState({valA: Math.sqrt((this.state.valC**2)-(this.state.valB**2))})
    }
    calculateB() {
        this.setState({valB: Math.sqrt((this.state.valC**2)-(this.state.valA**2))})
    }
    calculateC() {
        this.setState({valC: Math.sqrt((this.state.valA**2)+(this.state.valB**2))})
    }
}
export default PyTCalculator