import React from 'react'

 class Square extends React.Component {
  onDatBtnClick() {
    //console.log(this.props.value)
   // if (this.props)
   this.props.setDat(this.props.value);
    }
 

    render() {

             //let dat={this.props.value}
      return (
        <button className="square" onClick={this.onDatBtnClick.bind(this)}>
          {this.props.value}
        </button>
      );
    }
   }
   export default Square