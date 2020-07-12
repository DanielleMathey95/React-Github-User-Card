import React from 'react';

export default function Card(props) {
  return (
    <Container>
      <h2>{props.user.Login}</h2>
      <img src = {props.user.avatar_url} />
      <h4>Followers: {props.user.followers}</h4>
      <h4>Following: {props.user.following}</h4>
    </Container>
  )
}