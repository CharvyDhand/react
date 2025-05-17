import React from 'react'
function Card({username}) {                  //function Card(props)
    console.log("props",username)          // console.log(props.username)
  return (
    <div className="p-4 shadow-md rounded-xl">
      <h2>{username||"hello"}</h2>
    </div>
  );
}

export default Card;
