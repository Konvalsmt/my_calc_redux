export const SET_RESULT= 'SET_RESULT'

export  function setResult(dat) {
    return {
    type:  'SET_RESULT', //аналогично, теперь используем константу
    payload: dat
    }
    }