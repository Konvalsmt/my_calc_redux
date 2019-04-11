import React from 'react'
import Square from '../components/Square';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as pageActions from '../actions/PageActions'
import * as Resultactions from '../actions/Resultactions'
import * as ClearActions from '../actions/ClearActions'

class Board extends React.Component {

    renderSquare(i,click) {
      return <Square value={i} setDat={click} />;
    }

        
    render() {
      const status = 'Ведите первое число, действие, второе число  и нажмите =';
      let  { setDat } = this.props.pageActions;
      let  { setResult } = this.props.ResultActions;
      let  { ClearDat } = this.props.ClearActions; 

      return (
        <div>
          <input type="text" value={this.props.result} readonly></input>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(1,setDat)}
            {this.renderSquare(2,setDat)}
            {this.renderSquare(3,setDat)}
            {this.renderSquare("+",setDat)}
          </div>
          <div className="board-row">
            {this.renderSquare(4,setDat)}
            {this.renderSquare(5,setDat)}
            {this.renderSquare(6,setDat)}
            {this.renderSquare("-",setDat)}
          </div>
          <div className="board-row">
            {this.renderSquare(7,setDat)}
            {this.renderSquare(8,setDat)}
            {this.renderSquare(9,setDat)}
            {this.renderSquare("*",setDat)}
          </div>
          <div className="board-row">
            {this.renderSquare(0,setDat)}
            {this.renderSquare("<",ClearDat)}
            {this.renderSquare("=",setResult)}
            {this.renderSquare("/",setDat)}
          </div>

        </div>
      );
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
    
  export default connect(mapStateToProps,mapDispatchToProps)(Board);