
import React, { Component } from "react";
import { Container, Segment, Header, Image, Icon, Card } from "semantic-ui-react";
import "./App.css";
import SongForm from "./SongForm";
import Songs from "./Songs";
import styled from "styled-components";
import HeaderText from "./components/HeaderText";


class App extends Component {
  state = {
    songs: [
      { id: 1, name: "Devil went down to Georgia", artist: "Charlie Daniels", link:"https://upload.wikimedia.org/wikipedia/en/6/62/The_Devil_Went_Down_To_Georgia_cover.jpg"},
      { id: 2, name: "Tie a Yellow Ribbon", artist: "Dawn", link: "https://img.discogs.com/CwFAaEXG6vWnu3p1QR8hlWTFoj8=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-8220264-1569261217-2261.jpeg.jpg" },
      { id: 3, name: "Brandy (You're a Fine Girl)", artist: "Looking Glass", link:"https://m.media-amazon.com/images/I/81gE-3j36OL._SS500_.jpg" },
    ],
  };
  async componentDidMount() {
    console.log("mounted");
  }
  componentDidUpdate() {
    console.log("updated");
  }
  addSong = (song) => {
    console.log(song);
    this.setState({
      song: [song, ...this.state.songs],
    });
  };

  updateSong = (song) => {
    let updateSongs = this.state.songs.map((s) =>
      s.id === song.id ? song : s
    );

    this.setState({
      songs: updateSongs,
    });
  };

  deleteSong = (id) => {
    let filteredSongs = this.state.songs.filter((s) => s.id !== id);
    this.setState({
      songs: filteredSongs,
    });
  };
  render() {
    return (
      <AppContainer>
        <HeaderText size="large">Song Sation</HeaderText>
      <Segment as={Transparent}></Segment>
        <SongForm addSong={this.addSong} />
        <Songs
          updateSong={this.updateSong}
          deleteSong={this.deleteSong}
          songs={this.state.songs}
        />
      </AppContainer>
    );
  }
}

// const Star = styled.div`
//   fontsize: 30px;
//   display: inline-block;
//   color: red;
//   animation: ${rotate360} 2s linear infinite;
// `;
const Truncated = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const StyleCard = styled(Card)`
  height: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Transparent = styled.div`
    background: transparent !important
`;
const AppContainer = styled.div`
  min-height: 100vh;
  background: rgb(2,0,36);
background: linear-gradient(90deg, 
  rgba(2,0,36,1) 0%, 
rgba(9,9,121,1) 0%, 
rgba(139,179,242,1) 54%, 
rgba(0,212,255,1) 100%
);
`;

export default App;