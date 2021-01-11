import { Component } from 'react'
import './quadFCalculator.css'
class quadFCalculator extends Component{
    constructor (props){
        super(props)
        this.state={
            valA: null,
            valB: null, 
            valC: null
        }
    }
    render (){
        return(
            <form className='form'>
                <div className='center'>
                    <div className='qftitle'>
                        <h1>Quadratic Formula: </h1>
                        <div className='qfequation'>
                            <h1 className='qftopEquation'>-b&#177;&#8730;(b&sup2;-4ac)</h1>
                            <h1>2a</h1>
                        </div>
                        
                    </div>

                    <div>
                        <div className='qffillout'>
                            <h1 className='qftopEquation'>
                                -<input
                                    placeholder = 'b'
                                    type = 'number'
                                    value = {this.state.valB}
                                    onChange = {(e) => {this.setState({valB: e.target.value})}}
                                />
                                &#177;&#8730;(<input
                                    placeholder = 'b'
                                    type = 'number'
                                    value = {this.state.valB}
                                    onChange = {(e) => {this.setState({valB: e.target.value})}}
                                />&sup2;
                                -4<input
                                    placeholder = 'a'
                                    type = 'number'
                                    value = {this.state.valA}
                                    onChange = {(e) => {this.setState({valA: e.target.value})}}
                                />
                                <input
                                    placeholder = 'c'
                                    type = 'number'
                                    value = {this.state.valC}
                                    onChange = {(e) => {this.setState({valC: e.target.value})}}
                                />)
                            </h1>
                            <h1>2<input
                                    placeholder = 'a'
                                    type = 'number'
                                    value = {this.state.valA}
                                    onChange = {(e) => {this.setState({valA: e.target.value})}}
                                /></h1>
                        </div>
                    </div>

                    <div>
                        <h1>Plus Output: {(-this.state.valB+Math.sqrt(this.state.valB**2-(4*this.state.valA*this.state.valC)))/(2*this.state.valA)}</h1>
                        <h1>Minus Output: {(-this.state.valB-Math.sqrt(this.state.valB**2-(4*this.state.valA*this.state.valC)))/(2*this.state.valA)}</h1>
                    </div>
                    
                </div>
            </form>
        )
    }
}
export default quadFCalculator