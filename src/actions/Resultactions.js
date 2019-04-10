export  function setResult(dat) {
    return {
    type:  'SET_RESULT', //аналогично, теперь используем константу
    payload: dat
    }
    }