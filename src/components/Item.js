import React from 'react'

class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false
    }
  }

  toggleCheck = () => {
    this.setState({ checked: !this.state.checked })
  }

  render() {
    const item = this.props.item
    return (
      <li className="item">
        <input className="item__checkbox" type="checkbox" id={item} />
        <label
          className={`item__label ${
            this.state.checked ? 'item__label--checked' : ''
          }`}
          htmlFor={item}
          onClick={this.toggleCheck}
        >
          {item}
        </label>
        <button className="removeBtn btn" onClick={() => this.props.onRemove(item)}>
          —
        </button>
      </li>
    )
  }
}

export default Item
