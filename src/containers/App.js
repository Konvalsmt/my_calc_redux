import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Board from '../components/Board'
import * as pageActions from '../actions/PageActions'
import * as Resultactions from '../actions/Resultactions'
import * as ClearActions from '../actions/ClearActions'

class App extends Component {
    render() {
     let  { setDat } = this.props.pageActions;
   let  { setResult } = this.props.ResultActions;
   let  { ClearDat } = this.props.ClearActions;
  
return <div>
    <input type="text" defaultValue={this.props.result}></input>
<Board  setDat={setDat} setRes={setResult} ClearDat={ClearDat} />
</div>
}
}

function mapStateToProps(state) {
return {
result:state.result
}
}

function mapDispatchToProps(dispatch) {
return {
pageActions: bindActionCreators(pageActions, dispatch),
ResultActions: bindActionCreators(Resultactions, dispatch),
ClearActions: bindActionCreators(ClearActions, dispatch),
}
}

export default connect(mapStateToProps,mapDispatchToProps)(App)