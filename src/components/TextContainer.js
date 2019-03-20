import React, { Component } from "react";

export default class TextContainer extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
    this.updateText = this.updateText.bind(this);
  }

  updateText(e) {
    this.setState({
      text: e.target.value
    });
  }

  render() {
    let style = {
      color: this.props.fontColor,
      fontSize: this.props.fontSize,
      fontFamily: this.props.fontFamily
    };
    console.log(this.props);

    return (
      <div className="textContainer">
        <textarea
          style={style}
          onChange={this.updateText}
          value={this.state.text}
          placeholder="Start typing your thoughts here!"
          cols="90"
          rows="30"
        />
      </div>
    );
  }
}
