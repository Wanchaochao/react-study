import request from "../util/request";
import {message} from 'antd'

export default {
  namespace: 'puzzlecards',
  effects: {
    *queryInitCards(_,{ call, put }){
      try {
        const endPointURI = '/example/query';
        const puzzle = yield call(request,endPointURI)
        yield put({type:'addCard', payload: puzzle})
      }catch (e) {
        console.log('e',e)
        message.error(e.msg,3)
      }
    }
  },
  state: {
    cardList: [],
  },
  reducers: {
    addCard(state, {payload: newCard}) {
      const nextCounter = state.cardList.length;
      const nextCard = {...newCard,id: nextCounter}
      const newList = state.cardList.concat(nextCard)
      console.info(newList)
      return {
        cardList: newList,
        counter: nextCounter
      }
    }
  }
};
