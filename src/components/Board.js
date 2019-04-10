import React from 'react'
import Square from '../components/Square';

class Board extends React.Component {

  onDatBtnClick(e) {
    console.log(e)
       }
    renderSquare(i,click) {
      return <Square value={i} setDat={click} />;
    }
  
    render() {
      const status = 'Ведите первое число, действие, второе число  и нажмите =';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(1,this.props.setDat)}
            {this.renderSquare(2,this.props.setDat)}
            {this.renderSquare(3,this.props.setDat)}
            {this.renderSquare("+",this.props.setDat)}
          </div>
          <div className="board-row">
            {this.renderSquare(4,this.props.setDat)}
            {this.renderSquare(5,this.props.setDat)}
            {this.renderSquare(6,this.props.setDat)}
            {this.renderSquare("-",this.props.setDat)}
          </div>
          <div className="board-row">
            {this.renderSquare(7,this.props.setDat)}
            {this.renderSquare(8,this.props.setDat)}
            {this.renderSquare(9,this.props.setDat)}
            {this.renderSquare("*",this.props.setDat)}
          </div>
          <div className="board-row">
            {this.renderSquare(0,this.props.setDat)}
            {this.renderSquare("<")}
            {this.renderSquare("=",this.props.setRes)}
            {this.renderSquare("/",this.props.setDat)}
          </div>

        </div>
      );
    }
  }
  export default Board;