import { Component } from 'react'
import './TipCalculator.css'
class TipCalculator extends Component{
    constructor (props){
        super(props)
        this.state={
            bill: 0,
            tip: 0, 
            people: 1
        }
    }
    render (){
        return(
            <form className='form'>
                <h1>Bill: ${this.state.bill}</h1>
                <h1>Tip: {this.state.tip}%</h1>
                <h1>Total/Person: ${((parseInt(this.state.bill) + ((parseInt(this.state.bill) * parseInt(this.state.tip)) / 100))/parseInt(this.state.people)).toFixed(2)}</h1>
                <label for="Bill">Bill: </label>
                <input
                    id='Bill'
                    placeholder = 'Bill'
                    type = 'number'
                    value = {this.state.bill}
                    onChange = {(e) => {this.setState({bill: e.target.value})}}
                />
                <label for="Tip">Tip %: </label>
                <input
                    id='Tip'
                    placeholder = 'Tip'
                    type = 'number'
                    value = {this.state.tip}
                    onChange = {(e) => {this.setState({tip: e.target.value})}}
                />
                <label for="People to Split Upon">People to Split Upon: </label>
                <input
                    id='People to Split Upon'
                    placeholder = 'People to Split Upon'
                    type = 'number'
                    value = {this.state.people}
                    onChange = {(e) => {this.setState({people: e.target.value})}}
                />
            </form>
        )
    }
}
export default TipCalculator