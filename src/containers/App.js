import React,{Component} from 'react'
import Board from '../components/Board'
import '@material/react-button/dist/button.css';
import './App.css'
class App extends Component {
    render() {
    return  <div className="Calc-cls">
            <Board  />
            </div>
    }
}

export default App