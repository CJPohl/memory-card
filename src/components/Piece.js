import React from "react";

const Piece = (props) => {
  const { id, onClick } = props;
  const { img } = props.img;

  // Event is passed upwards
  const handleClick = (e) => {
    onClick(e);
  };

  return (
    <div onClick={handleClick} className="piece" id={id}>
      <img alt="This is a game piece" src={img}></img>
    </div>
  );
};

export default Piece;
