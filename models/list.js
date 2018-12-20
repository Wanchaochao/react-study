import request from "../util/request";
import {message} from "antd"

export default {
  namespace: 'list',
  state: {
    cardsList: []
  },
  effects: {
    *queryList(_,{call, put}){
      try {
        const endPointURI = '/example/cardslist';
        const list = yield call(request,endPointURI)
        yield put({type:'addList', payload: list})
      }catch (e) {
        console.log('e',e)
        message.error(e.msg,3)
      }
    },
    *createCard(_,{call, put}){
      try {
        const endPointURI = '/example/createcard';
        const item = yield call(request,endPointURI)
        yield put({type:'appendList', payload: item})
      }catch (e) {
        console.log('e',e)
        message.error(e.msg,3)
      }
    },


  },
  reducers: {
    addList (state,{payload: list}) {
      let newList = state.cardsList.concat(list)
      return{
        cardsList: newList
      }
    },
    appendList (state,{payload: item}) {
      state.cardsList.push(item)
      let newList = state.cardsList.concat([item])
      return{
        ...state,
        ...payload,
        cardsList: newList
      }
    },
  }
}
