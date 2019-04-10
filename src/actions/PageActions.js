//export const SET_DAT= 'SET_DAT'

export function setDat(dat) {
return {
type:  'SET_DAT', //аналогично, теперь используем константу
payload: dat
}
}