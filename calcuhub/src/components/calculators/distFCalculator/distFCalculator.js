import { Component } from 'react'
import './distFCalculator.css'
class distFCalculator extends Component{
    constructor (props){
        super(props)
        this.state={
            valx1: null,
            valx2: null, 
            valy1: null,
            valy2: null
        }
    }
    render (){
        return(
            <form className='form'>
                <div className='center'>
                    <div className='title'>
                        <h1>Distance Formula: &#8730;(x<sub>1</sub>-x<sub>2</sub>)&sup2;+(y<sub>1</sub>-y<sub>2</sub>)&sup2;</h1>
                    </div>

                    <div className='dfsentence'>
                        <div className='distFfillout'>
                            <h1>&#8730;(
                                <input
                                    placeholder = 'x1'
                                    type = 'number'
                                    value = {this.state.valx1}
                                    onChange = {(e) => {this.setState({valx1: e.target.value})}}
                                />
                                <sub>1</sub>-
                                <input
                                    placeholder = 'x2'
                                    type = 'number'
                                    value = {this.state.valx2}
                                    onChange = {(e) => {this.setState({valx2: e.target.value})}}
                                /><sub>2</sub>)&sup2;+(
                                <input
                                    placeholder = 'y1'
                                    type = 'number'
                                    value = {this.state.valy1}
                                    onChange = {(e) => {this.setState({valy1: e.target.value})}}
                                /><sub>1</sub>-
                                <input
                                    placeholder = 'y2'
                                    type = 'number'
                                    value = {this.state.valy2}
                                    onChange = {(e) => {this.setState({valy2: e.target.value})}}
                                /><sub>2</sub>)&sup2;</h1>
                        </div>
                        <h1>Output: {Math.sqrt((Math.pow((this.state.valx1-this.state.valx2),2)+Math.pow((this.state.valy1-this.state.valy2),2)))}</h1>
                    </div>
                </div>
            </form>
        )
    }
}
export default distFCalculator