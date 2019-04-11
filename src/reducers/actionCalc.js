export const SET_RESULT = 'SET_RESULT'
export const SET_DAT= 'SET_DAT'
export const SET_CLEAR= 'SET_CLEAR'

const initialState = {
            result:"0"
                    };

function getResult(p) {
    let myString = p;

let splits = myString.split('+');
if (splits.length>1 ){
    let s=parseFloat(splits[0])+parseFloat(splits[1])
return s.toString()
}

splits = myString.split('-');
if (splits.length>1 ){
    let s=parseFloat(splits[0])-parseFloat(splits[1])
return s.toString()
}

splits = myString.split('*');
if (splits.length>1 ){
    let s=parseFloat(splits[0])*parseFloat(splits[1])
return s.toString()
}

splits = myString.split('/');
if (splits.length>1 ){
    let s=parseFloat(splits[0])/parseFloat(splits[1])
return s.toString()
}


    //return p
}

    export default function Result(state = initialState, action) {
     
    switch (action.type) {
    case SET_DAT: //
    return { ...state, result:state.result+ action.payload }
  
        case SET_RESULT :
        return {...state, result:getResult(state.result)}  

        case SET_CLEAR :
        return {...state, result:state.result.substr(0, state.result.length - 1)}   
        

    default:
    return state;
    }
    }