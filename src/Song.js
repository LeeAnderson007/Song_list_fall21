import React from "react";
import { Button, Table, Icon, Image } from "semantic-ui-react";
import SongForm from "./SongForm";
import styled, { keyframes } from "styled-components";
import { s } from "keyboard-key";

class Song extends React.Component {
  state = { showForm: false };
  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  };
  render() {
    if (this.state.showForm) {
      return (
        <>
          <SongForm
            toggleForm={this.toggleForm}
            updateSong={this.props.updateSong}
            {...this.props}
          />
          <Button onClick={this.toggleForm} color="blue">
            cancel
          </Button>
        </>
      );
    }
    return (
      <Table.Row key={this.props.id}>
        <Table.Cell>{this.props.name}
        <Music>
                    <Icon size="large" name="music" />
                  </Music>
        <Image src={this.props.link} />
      
        </Table.Cell>
      
        <Table.Cell>{this.props.artist}</Table.Cell>
        <Table.Cell>
          <Button
            onClick={() => this.props.deleteSong(this.props.id)}
            color="blue"
          >
            Delete
          </Button>
          <Button onClick={this.toggleForm} color="blue">
            update
          </Button>
        </Table.Cell>
      </Table.Row>
    );
  }
}
const rotate45 = keyframes`
from {
  transform:rotate(0deg);
  color: orange;
}
to {
  transform:rotate(45deg);
  color: blue;
}
`;
const Music = styled.div`
  fontsize: 30px;
  display: inline-block;
  color: orange;
  animation: ${rotate45} 2s linear infinite;
  `;
export default Song;
