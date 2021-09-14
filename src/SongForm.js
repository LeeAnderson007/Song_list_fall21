import React from "react";
import { Button, Form } from "semantic-ui-react";

class SongForm extends React.Component {
  state = {
    name: this.props.name ? this.props.name : "",
    phone: this.props.artist ? this.props.artist : "",
  };
  handleChange = (e, { value }) => {
    this.setState({
      [e.target.name]: value,
    });
  };
  handleSubmit = (e) => {
    if (this.props.id) {
      this.props.updateSong({ id: this.props.id, ...this.state });
      this.props.toggleForm();
    } else {
      this.props.addSong({ id: Math.random(), ...this.state });
    }
    this.setState({
      name: "",
      artist: "",
    });
  };
  render() {
    return (
      <div>
        <h1>Song Form</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              name={"name"}
              value={this.state.name}
              onChange={this.handleChange}
              label="Name"
            />
            <Form.Input
              name={"Artist"}
              value={this.state.artist}
              onChange={this.handleChange}
              label="Artist"
            />
          </Form.Group>
          <Button color="blue">{this.props.id ? "Update" : "Add"}</Button>
        </Form>
      </div>
    );
  }
}

export default SongForm;
