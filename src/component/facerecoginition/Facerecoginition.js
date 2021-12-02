import React from "react";
import "./Facebox.css";

const Facerecoginition = ({ imageUrl, box }) => {
  return (

<div className="center">
  <div className="face-box">
  <img  class="img-fluid" 
          id="inputimage"
          src={imageUrl}
          alt=""
          width="350px"
          height="auto"
        />
        <div
          className="bounding-box"
          style={{
            top: box.toprow,
            left: box.leftcol,
            bottom: box.bottomrow,
            right: box.rightcol,
          }}
        ></div>
  </div>
</div>
  );
};

export default Facerecoginition;
