export const ADD_LIST = 'ADD_LIST'
// export const ADD_ID = 'ADD_ID'
export const REMOVE_LIST = 'REMOVE_LIST'

export function addList(text) {
  return { type: ADD_LIST, text }
}
// export function addId(id) {
//   return { type: ADD_ID, id }
// }

  export function removeList(item){
    return{
      type:REMOVE_LIST, item
    }
  }