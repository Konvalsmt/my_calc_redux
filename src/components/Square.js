import React from 'react'
import Button from '@material/react-button';
import './button.css'

 class Square extends React.Component {
  onDatBtnClick() {
    //console.log(this.props.value)
   // if (this.props)
   this.props.setDat(this.props.value);
    }
  

    render() {

         return (
        <button  onClick={this.onDatBtnClick.bind(this)} className={this.props.className}>
              {this.props.value}
                  </button>
          );
    }
   }
   export default Square