import { Component } from 'react'
import './midPFCalculator.css'
class midPFCalculator extends Component{
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
                    <div className='mpftitle'>
                        <h1>Mid-Point Formula:
                            <div className='mpfequation'>
                                (x,y)=(
                                <div className='ePart'>
                                    <div className='topEquation'>x<sub>1</sub>+x<sub>2</sub></div>
                                    <div>2</div>
                                </div>,
                                <div className='ePart'>
                                    <div className='topEquation'>y<sub>1</sub>+y<sub>2</sub></div>
                                    <div>2</div>
                                </div>)
                            </div>
                        </h1>
                    </div>

                    <div className='mpfsentence'>
                        <div className='mpffillout'>
                            <h1>
                            ({(parseInt(this.state.valx1)+parseInt(this.state.valx2))/2},{(parseInt(this.state.valy1)+parseInt(this.state.valy2))/2})=
                                <div className='mpfequation'>(
                                    <div className='ePart'>
                                        <div className='topEquation'>
                                            <input
                                                placeholder = 'x1'
                                                type = 'number'
                                                value = {this.state.valx1}
                                                onChange = {(e) => {this.setState({valx1: e.target.value})}}
                                            />
                                            <sub>1</sub>+
                                            <input
                                                placeholder = 'x2'
                                                type = 'number'
                                                value = {this.state.valx2}
                                                onChange = {(e) => {this.setState({valx2: e.target.value})}}
                                            />
                                            <sub>2</sub>
                                        </div>
                                        <div>2</div>
                                    </div>,
                                    <div className='ePart'>
                                        <div className='topEquation'>
                                        <input
                                            placeholder = 'y1'
                                            type = 'number'
                                            value = {this.state.valy1}
                                            onChange = {(e) => {this.setState({valy1: e.target.value})}}
                                        />    
                                        <sub>1</sub>+
                                        <input
                                            placeholder = 'y2'
                                            type = 'number'
                                            value = {this.state.valy2}
                                            onChange = {(e) => {this.setState({valy2: e.target.value})}}
                                        />
                                        <sub>2</sub></div>
                                        <div>2</div>
                                    </div>)
                                </div>
                            </h1>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}
export default midPFCalculator