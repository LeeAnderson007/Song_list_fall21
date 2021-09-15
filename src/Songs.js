import React, { Component } from "react";
import { Button, Table, Container, Segment,  Header, Image, Icon, Card } from "semantic-ui-react";
import Song from "./Song";
import HeaderText from "./components/HeaderText";
import styled, { keyframes } from "styled-components";
import { device, primaryColor } from "./query";

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
   )
  };

  export default Songs;


  


//   <AppContainer>
//   <HeaderText size="large">Header Text component</HeaderText>
//   <Segment as={Transparent}>
//     <HeaderText size="med">My Projects</HeaderText>
//   </Segment>
//   <Segment as={Transparent}>
//     <HeaderText>Contacts</HeaderText>
//   </Segment>
//   <CardWrapper>
//     <MyCard>yo</MyCard>
//     <MyCard>yo</MyCard>
//     <MyCard>yo</MyCard>
//     <MyCard>yo</MyCard>
//     <MyCard>yo</MyCard>
//     <MyCard>yo</MyCard>
//   </CardWrapper>
// </AppContainer>
// );
// };

// const MyCard = styled.div`
// margin: 20px;
// width: 200px;
// `;
// const CardWrapper = styled.div`
// display: flex;
// flex-direction: row;
// background-color: ${primaryColor};
// @media ${device.laptop} {
// flex-direction: column;
// background-color: green;
// }
// @media ${device.mobileL} {
// flex-direction: column;
// background-color: purple;
// }
// `;
// const ButtonLink = styled.a`
// float: right;
// padding: 10px 30px;
// border-raduis: 10px;
// color: white !important;
// background-color: ${primaryColor};
// &:hover {
// background: pink;
// }
// &:visited {
// background: orange;
// }
// `;

// const rotate360 = keyframes`
// from {
// transform:rotate(0deg);
// color: red;
// }
// to {
// transform:rotate(360deg);
// color: blue;
// }
// `;
// const Star = styled.div`
// fontsize: 30px;
// display: inline-block;
// color: red;
// animation: ${rotate360} 2s linear infinite;
// `;
// const Truncated = styled.div`
// white-space: nowrap;
// overflow: hidden;
// text-overflow: ellipsis;
// `;
// const StyleCard = styled(Card)`
// height: 200px;
// overflow: hidden;
// text-overflow: ellipsis;
// `;

// const Transparent = styled.div`
// background: transparent !important;
// `;
// const AppContainer = styled.div`
// min-height: 100vh;
// background: rgb(253, 75, 29);
// background: linear-gradient(
// 90deg,
// rgba(253, 75, 29, 1) 5%,
// rgba(252, 153, 69, 1) 100%
// );
// `;