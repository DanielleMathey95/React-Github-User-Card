import React from 'react';

const Followers = (props) => {
  console.log("dm: Followers.js Followers:", props.follower);

    return (
      <Container>
        <h2>{props.follower.Login}</h2>
        <img src = {props.follower.avatar_url} />
        <h3>{props.followr.url}</h3>
      </Container>
    )
}