import React, { Component } from 'react';
import * as actionTypes from '../../store/action'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux'
class Counter extends Component {

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={()=>this.props.onIncrementCounter()} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter} />
                <hr />
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>
                    Store button
                </button>
                <ul>
                    {this.props.storedResult.map(stResults=>(
                    <li onClick={()=>this.props.onDeleteResult(stResults.id)} key={stResults.id}>{stResults.value}</li>
                    )
                        
                    )}
                    
                </ul>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        ctr: state.count.counter,
        storedResult:state.res.result
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter:()=> {dispatch({ type: actionTypes.INCREMENT })},
        onDecrementCounter: () => { dispatch({ type: actionTypes.DECREMENT}) },
        onAddCounter: () => { dispatch({ type: actionTypes.ADD, val: 5 }) },
        onSubtractCounter: () => { dispatch({ type:actionTypes.SUBTRACT , val: 5 }) },
        onStoreResult: (counter) => { dispatch({ type: actionTypes.STORE_RESULT,counter:counter}) },
        onDeleteResult: (id) => { dispatch({ type: actionTypes.DELETE_RESULT,resultID:id}) },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);