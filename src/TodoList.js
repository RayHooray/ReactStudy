import React, {Component, Fragment} from 'react'
require('./TodoList.css')

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 'hello world',
            list: []
        }
    }

    render() {
        return (
            <Fragment>
                <p>
                    <label htmlFor="insert">请输入内容</label>
                    <input
                        id='insert'
                        className='input'
                        type="text"
                        value={this.state.inputValue}
                        onChange={this.onceChange.bind(this)}
                    />
                </p>
                <p><input type="submit" value="提交" onClick={this.submit.bind(this)}/></p>
                <p>{this.state.inputValue}</p>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index}>{item}<button onClick={this.delete.bind(this, index)}>Delete</button></li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    onceChange(e) {
        console.log(e)
        this.setState({
            inputValue: e.target.value
        })
    }
    submit () {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    delete (index) {
        console.log(index)
        const newList = [...this.state.list];
        newList.splice(index, 1);
        this.setState({
            list: newList
        })
    }
}

export default TodoList