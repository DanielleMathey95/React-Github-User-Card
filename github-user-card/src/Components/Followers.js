import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
  align-items: center;
  color: white;
  max-width: 50%;
  height: auto;
  padding: 5%;
  background: -webkit-linear-gradient(top, rgba(181,189,200,1) 0%,rgba(130,140,149,1) 36%,rgba(40,52,59,1) 100%);
  border-radius: 8px;
  box-sizing: border-box;
  margin-bottom: 10px;
  margin-left: 30rem;
  display: flex;
  flex-direction: column;
`

const Img = styled.img `
  width: 10rem;
  height: auto;
`

const Followers = (props) => {
  console.log("dm: Followers.js Followers:", props.follower);
    return (
      <Container>
        <h2>{props.follower.login}</h2>
        <Img src = {props.follower.avatar_url} />
        <a href={props.follower.url}><h3>{props.follower.url}</h3></a>
        <h4>Followers: {props.follower.followers}</h4>
        <h4>Following: {props.follower.following}</h4>
      </Container>
    )
}

export default Followers;