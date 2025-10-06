import React from "react";

export function ProfileCard(props) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px'
    }}>
      <h2>{props.name}</h2>
      <p>{`【年齢】${props.age}歳`}</p>
      <p>{`【自己紹介】${props.bio}`}</p>
    </div>
  );
}