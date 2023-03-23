/*
    
    使用react
    初始假设this.props.params是一个对象，如果有值，则把值存入state的obj里，然后遍历这个obj，每一个键值对都生成一组    
    <input>1</input>
    <input>2</input>
    <button>+</button>
    <button>-</button>，
    input1的值为键值对的key，input2的值为键值对的value，
    如果this.props.params没有值，则在state里设置一个空对象obj{}，然后页面上生成一组
    <input>1</input>
    <input>2</input>
    <button>+</button>
    <button>-</button>，
    然后input1的值作为obj的key，input2的值作为input1的value，
    然后这些在同一行内，如果点击+按钮，会增加一行
    <input>1</input>
    <input>2</input>
    <button>+</button>
    <button>-</button>，
    点击-按钮，会删除点击的那行
    <input>1</input>
    <input>2</input>
    <button>+</button>
    <button>-</button>，
    用类组件,对象的key是不可变的话，
    handleInputChange也不要像下面这么写，因为input1输入后，会出现{key:"key"}的现象
      handleInputChange = (key, event) => {
    const { value } = event.target;
    this.setState((prevState) => ({
      obj: {
        ...prevState.obj,
        [key]: value, // 更新指定 key 的值
      },
    }));
  };
    请注意，是两个input框，而且我说了，
    input1的值作为obj的key，input2的值作为input1的value，你这么写会出现{key:"key"}的现象代码怎么写



    下述代码中的xxxx ，我希望把props.params中的键值对都遍历成[{ key: "", value: "" }]的形式
export default class Hello extends Component {
  constructor(props) {
    super(props);
    // 判断是否有参数传入
    const hasParams = props.params && Object.keys(props.params).length > 0;

    // 初始化 state
    this.state = {
      obj:  {},
      rows: hasParams ? xxxx : [{ key: "", value: "" }]
    };

    我的意思是，比如props.params是{name:"aa",age:18},
然后转换成[{key:"name",value:"aa"}, {key:"age",value:"18"}]
*/



/*
import React, { Component } from 'react'

export default class Hello extends Component {
  constructor(props) {
    super(props);
    // 判断是否有参数传入
    const hasParams = props.params && Object.keys(props.params).length > 0;

    // 初始化 state
    this.state = {
      obj:  {},
      rows: hasParams ? Object.entries(props.params).map(([key, value]) => ({ key, value })) : [{ key: "", value: "" }]
    };

    this.handleAddRow = this.handleAddRow.bind(this);
    this.handleDeleteRow = this.handleDeleteRow.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAddRow = () => {
    this.setState((prevState) => ({
      rows: [...prevState.rows, { key: "", value: "" }],
    }));
  };

  handleDeleteRow = (index) => {
    this.setState((prevState) => ({
      rows: prevState.rows.filter((row, i) => i !== index),
    }));
  };

  handleInputChange = (index, e) => {
    const { value,name } = e.target;
    this.setState((prevState) => {
      const { rows } = prevState;
      rows[index][name] = value; // 更新指定行的指定 key 的值
      return { rows };
    });
  };

  // 提交数据
  handleSubmit = () => {
    const { obj, rows } = this.state;
    const newObj = {};
    rows.forEach((row) => {
      if (row.key && row.value) {
        newObj[row.key] = row.value;
      }
    });
    this.setState({ obj: { ...obj, ...newObj }, rows: [{ key: "", value: "" }] });
  };

  render() {
    const {  rows } = this.state;
    return (
      <div>
        {
          rows.map((row, index) => (
            <div key={index}>
              <input
                name="key"
                value={row.key}
                placeholder="Key"
                onChange={(e) => this.handleInputChange(index, e)}
              />
              <input
                name="value"
                value={row.value}
                placeholder="Value"
                onChange={(e) => this.handleInputChange(index, e)}
              />
              <button onClick={() => this.handleAddRow()}>+</button>
              <button onClick={() => this.handleDeleteRow(index)}>-</button>
            </div>
          ))}
          <button onClick={() => this.handleSubmit()}>handleSubmit</button>
      </div>
    );
  }
}
*/