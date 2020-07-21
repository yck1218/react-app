import {CESHI,AJAX} from '../actionTypes';
let initState={
    msg:"我是一个状态管理的描述文字",
    list:[]
}
export default function reducer(state=initState, action) {
  switch (action.type) {
      case CESHI :
          let newState = JSON.parse(JSON.stringify(state))
          newState.msg=action.payload  
        return newState;
        case AJAX:
          let newState2 = JSON.parse(JSON.stringify(state))
        newState2.list = action.payload
          return newState2
     default:
            return state;
  }

}