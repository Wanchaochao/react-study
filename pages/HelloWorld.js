import {Card, Tabs, Tree} from 'antd'
import React from 'react'
// import {MyTree} from '../components/MyTree'

const {Meta} = Card

const TreeNode = Tree.TreeNode
const style = {
  width: '400px',
  margin: '30px',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  border: '1px solid #e8e8e8',
};

const MyInput = ({value = '', onChange}) => (
  <input onChange={onChange} value={value}/>
);

class HelloWorld extends React.Component {

  textChange = (e) => {
    this.setState({text: e.target.value})
    console.log(e.target.value)
  }

  state = {
    text: '',
    activeKey: '',
    expandedKeys: []
  }

  // 接收选中事件，修改 expandedKeys
  onSelect = (selectedKeys) => {
    const {expandedKeys} = this.state;
    const key = selectedKeys[0];

    if (expandedKeys.includes(key)) {
      // 移除 key
      this.setState({
        expandedKeys: expandedKeys.filter(k => k !== key),
      });
    } else {
      // 添加 key
      this.setState({expandedKeys: [...expandedKeys, key]});
    }
  }

  // 接收原本的展开事件，在 state 中记录 expandedKeys
  onExpand = (expandedKeys) => {
    console.log(expandedKeys)
    this.setState({expandedKeys});
  }

  reset = () => {
    this.setState({text: ''})
  }

  onTabChange = (key) => {
    this.setState({activeKey: key})
  }

  render() {
    return <div>
      <Card
        style={style}
        actions={[<a>操作1</a>, <a>操作2</a>]}
        cover={<img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" alt="test"/>}
      >
        <Card.Meta avatar={<img
          src="http://littlebug.oss-cn-beijing.aliyuncs.com/www.littlebug.vip/favicon.ico"
          alt="小bug"/>
        }
                   title="little bug"
                   description="demo"
        />
      </Card>
      <Tabs defaultActiveKey="1" onChange={this.onTabChange}>
        <Tabs.TabPane tab="Tab 1" key="1">Content of Tab Pane 1</Tabs.TabPane>
        <Tabs.TabPane tab="Tab 2" key="2">Content of Tab Pane 2</Tabs.TabPane>
      </Tabs>
      <MyInput onChange={this.textChange} value={this.state.text}/>
      <button onClick={this.reset}>Reset</button>

      <Tree
        expandedKeys={this.state.expandedKeys}
        selectedKeys={[]}
        onExpand={this.onExpand}
        onSelect={this.onSelect}
      >
        <TreeNode title="parent 1" key="0-0">
          <TreeNode title="leaf" key="0-0-0"/>
          <TreeNode title="leaf" key="0-0-1"/>
        </TreeNode>

        <TreeNode title="parent 1" key="0-1">
          <TreeNode title="leaf" key="0-0-0"/>
          <TreeNode title="leaf" key="0-0-1"/>
        </TreeNode>
        <TreeNode title="parent 1" key="0-2">
          <TreeNode title="leaf" key="0-0-0"/>
          <TreeNode title="leaf" key="0-0-1"/>
        </TreeNode>
      </Tree>
    </div>
  }
}

export default HelloWorld
