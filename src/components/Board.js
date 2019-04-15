import React from 'react'
import Square from '../components/Square';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as pageActions from '../actions/PageActions'
import * as Resultactions from '../actions/Resultactions'
import * as ClearActions from '../actions/ClearActions'
import './Board.css';

class Board extends React.Component {

    renderSquare(i,click,butClassName) {
      return <Square value={i} setDat={click} className={butClassName} />;
    }

        
    render() {
      const status = 'Ведите первое число, действие, второе число  и нажмите =';
      let  { setDat } = this.props.pageActions;
      let  { setResult } = this.props.ResultActions;
      let  { ClearDat } = this.props.ClearActions; 

      return (
        <div>
          <input type="text" className='result-cls' placeholder="Результат" value={this.props.result} readonly></input>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(1,setDat,"but-class1")}
            {this.renderSquare(2,setDat,"but-class1")}
            {this.renderSquare(3,setDat,"but-class1")}
            {this.renderSquare("+",setDat,"mdc-button mdc-button--primary mdc-button--raised")}
          </div>
          <div className="board-row">
            {this.renderSquare(4,setDat,"but-class1")}
            {this.renderSquare(5,setDat,"but-class1")}
            {this.renderSquare(6,setDat,"but-class1")}
            {this.renderSquare("-",setDat,"mdc-button mdc-button--primary mdc-button--raised")}
          </div>
          <div className="board-row">
            {this.renderSquare(7,setDat,"but-class1")}
            {this.renderSquare(8,setDat,"but-class1")}
            {this.renderSquare(9,setDat,"but-class1")}
            {this.renderSquare("*",setDat,"mdc-button mdc-button--primary mdc-button--raised")}
          </div>
          <div className="board-row">
            {this.renderSquare(0,setDat,"but-class1")}
            {this.renderSquare("<",ClearDat,"but-class2")}
            {this.renderSquare("=",setResult,"but-class2")}
            {this.renderSquare("/",setDat,"mdc-button mdc-button--primary mdc-button--raised")}
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