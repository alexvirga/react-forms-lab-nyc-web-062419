import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: ""};
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    })
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.value} onChange={this.handleChange} />
        <h3> {this.props.maxChars - this.state.value.length} </h3>
      </div>
    );
  }
}

export default TwitterMessage;
