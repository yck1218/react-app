import { createStore,combineReducers,applyMiddleware} from 'redux';
// combineReducers  可以把两个小 reducer 合并成一个大reducer   applyMiddleware 通过这个方法传递thunk 来将异步转为同步
import thunk  from   'redux-thunk';  //处理异步改变数据转化为同步数据的插件
import ceshiReducer from './reducers/ceshi';
import getCateReducer from './reducers/getCate';

let reducer =combineReducers({
    ceshi:ceshiReducer,
    getCate:getCateReducer
})

const store = createStore(reducer,applyMiddleware(thunk))

export default store;