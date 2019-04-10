

export function ClearDat(dat) {
    return {
    type:  'SET_CLEAR', //аналогично, теперь используем константу
    payload: dat
    }
    }