import { Component } from 'react'
import './quadFCalculator.css'
class quadFCalculator extends Component{
    constructor (props){
        super(props)
        this.state={
            valA: 0,
            valB: 0, 
            valC: 0,
            output: 0
        }
    }
    render (){
        return(
            <form className='form'>
                <div className='center'>
                    <div className='title'>
                        <h1>Quadratic Formula: </h1>
                        <div className='equation'>
                            <h1 className='topEquation'>-b&#177;&#8730;(b&sup2;-4ac)</h1>
                            <h1>2a</h1>
                        </div>
                        
                    </div>

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
                                />^2
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
                                />^2
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
                                />^2
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
export default quadFCalculator