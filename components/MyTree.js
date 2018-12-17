import {Tree} from 'antd'

console.log(Tree)

export class MyTree extends Tree {

  state = {
    expandedKeys: [],
  }

  onExpand = (expandedKeys) => {
    this.setState({ expandedKeys });
  }

  // 接收选中事件，修改 expandedKeys
  onSelect = (selectedKeys) => {
    const { expandedKeys } = this.state;
    const key = selectedKeys[0];

    if (expandedKeys.includes(key)) {
      // 移除 key
      this.setState({
        expandedKeys: expandedKeys.filter(k => k !== key),
      });
    } else {
      // 添加 key
      this.setState({ expandedKeys: [...expandedKeys, key] });
    }
  }
}
