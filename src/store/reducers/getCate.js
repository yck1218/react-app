import {CATE} from '../actionTypes';
let initState={
    cateList:[]
}
export default function reducer(state=initState, action) {
  switch (action.type) {
      case CATE :
          console.log('CATE---action',action);
          let newState = JSON.parse(JSON.stringify(state))
          newState.cateList=action.payload  
        return newState;
     default:
            return state;
  }

}