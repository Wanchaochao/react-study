import React, {Component} from 'react';
import {Card, Button} from 'antd';
import {connect} from 'dva';
import {Process} from '../util/co'

const namespace = 'puzzlecards';

const mapStateToProps = (state) => {
  const {cardList, counter} = state[namespace]
  return {
    cardList,
    counter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onclickAdd: (newCard) => {
      Process(function* () {
        yield dispatch({
          type: `${namespace}/queryInitCards`,
          payload: newCard
        })
      })
    },
    onDidMount: () => {
      Process(function* () {
        yield dispatch({
          type: `${namespace}/queryInitCards`,
        });
      })


    },
  }
}


@connect(mapStateToProps, mapDispatchToProps)
export default class PuzzleCardsPage extends Component {
  componentDidMount() {
    this.props.onDidMount();
  }

  render() {
    return (
      <div>
        {
          this.props.cardList.map(card => {
            return (
              <Card key={card.id}>
                <div>Q: {card.setup}</div>
                <div>
                  <strong>A: {card.punchline}</strong>
                </div>
              </Card>
            );
          })
        }
        <div>
          <Button
            htmlType="button"
            onClick={() => this.props.onclickAdd({
              setup: 'add a new',
              punchline: 'new card'
            })}> 添加卡片 </Button>
        </div>
      </div>
    );
  }
}
