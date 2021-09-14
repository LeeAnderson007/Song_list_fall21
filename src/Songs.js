import React from "react";
import { Button, Table } from "semantic-ui-react";
import Song from "./Song";

const Songs = ({ songs, deleteSong, updateSong }) => {
  // console.log(songs)
  return(  
   <Table celled padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Song Name</Table.HeaderCell>
          <Table.HeaderCell>Artist</Table.HeaderCell>
          <Table.HeaderCell>Options</Table.HeaderCell>
          <Table.Cell>
            {/* <Button color="blue">
              Delete</Button> */}
          </Table.Cell>
        </Table.Row>
      </Table.Header>
  
      <Table.Body>
        {songs.map((song) => (
          <Song
            updateSong={updateSong}
            deleteSong={deleteSong}
            {...song}
          />
        ))}
      </Table.Body>
    </Table>
  )};
  
  export default Songs;