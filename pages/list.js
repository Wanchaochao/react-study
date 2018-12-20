import React, {Component} from 'react';
import {Table, Modal, Button, Input, Form, message} from 'antd'
import {connect} from 'dva'

class List extends Component {

  state = {
    visible: false
  }

  columns = [
    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '描述',
      dataIndex: 'desc',
    },
    {
      title: '链接',
      dataIndex: 'url',
      render: value => <a href={value}>{value}</a>,
    },
  ];

  componentDidMount() {
    this.props.dispatch({
      type: 'list/queryList',
    });
  }

  showForm = () => {
    return this.setState({visible: true})
  }
  hideForm = () => {
    return this.setState({visible: false})
  }
  submitForm = () => {
    const {dispatch,form: {validateFields}} = this.props
    validateFields((err,values) => {
      if (!err) {
        dispatch({
          type: 'list/createCard',
          payload: values
        })
        this.setState({visible: false})
        return true
      }
      message.error(JSON.stringify(err),2)
    })

  }

  render() {

    const {cardsList, cardsLoading} = this.props;
    const {visible} = this.state
    const {Item} = Form
    const {form: {getFieldDecorator}} = this.props;

    console.log(this.props)
    return (
      <div>
        <Table columns={this.columns} dataSource={cardsList} loading={cardsLoading} rowKey='id'/>

        <Button htmlType="button" onClick={this.showForm}>新建</Button>
        <Modal title="新建card" visible={visible} onCancel={this.hideForm} onOk={this.submitForm}>
          <Form>
            <Item label="名称">
              {getFieldDecorator('name', {rules: [{required: true}]})(
                <Input type="text"/>
              )}
            </Item>
            <Item label="描述">
              {getFieldDecorator('desc', {rules: [{required: true}]})(
                <Input type="text"/>
              )}
            </Item>
            <Item label="连接">
              {getFieldDecorator('url', {rules: [{type: 'url'}]})(
                <Input type="text"/>
              )}
            </Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cardsList: state.list.cardsList,
    cardsLoading: state.loading.effects['list/queryList'],
  }
}

export default connect(mapStateToProps)(Form.create()(List));
