import {Card, Tabs, Tree} from 'antd'
import React from 'react'

const TreeNode = Tree.TreeNode
const style = {
  width: '400px',
  margin: '30px',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  border: '1px solid #e8e8e8',
};

const MyInput = ({ value = '', onChange }) => (
  <input onChange={onChange} value={value} />
);

class HelloWorld extends React.Component{

  textChange = (e) =>{
    this.setState({text: e.target.value})
    console.log(e.target.value)
  }

  state = {
    text: '',
    activeKey: '',
  }

  reset = () => {
    this.setState({text: ''})
  }

  onTabChange = (key) => {
    this.setState({activeKey: key})
  }

  render() {
    return <div>
      <Card style={style} actions={[<a>操作1</a>,<a>操作2</a>]}>
        <Card.Meta avatar={<img
          src="http://littlebug.oss-cn-beijing.aliyuncs.com/www.littlebug.vip/favicon.ico"
          alt="小bug"/>}
                   style={{ width: '64px', height: '64px', borderRadius: '32px' }}
                   title="littlebug"
                   description="demo"
        />
      </Card>
      <Tabs defaultActiveKey="1" onChange={this.onTabChange}>
        <Tabs.TabPane tab="Tab 1" key="1">Content of Tab Pane 1</Tabs.TabPane>
        <Tabs.TabPane tab="Tab 2" key="2">Content of Tab Pane 2</Tabs.TabPane>
      </Tabs>
      <MyInput onChange={this.textChange} value={this.state.text} />
      <button onClick={this.reset}>Reset</button>

      <Tree>
        <TreeNode title="parent 1" key="0-0">
          <TreeNode title="leaf" key="0-0-0" />
          <TreeNode title="leaf" key="0-0-1" />
        </TreeNode>
      </Tree>
    </div>
  }
}

export default HelloWorld
