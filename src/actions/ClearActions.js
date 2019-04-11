export const SET_CLEAR= 'SET_CLEAR'
export function ClearDat(dat) {
    return {
    type:  SET_CLEAR, // константа
    payload: dat
    }
    }