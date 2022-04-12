import React, { useState } from "react";

export default function Computer(props) {
  let { computerRandom } = props;

  //taọ animation cho hiệu ứng random ComputerPlayer
  let keyFrame = `@keyframes randomItem${Date.now()} {
    0% {top: -30px}
    25% {top: 30px}
    50% {top: -30px}
    75% {top: 30px}
    100% {top: 0}
    
  }`;
  return (
    <div className="playerGame">
      <style>{keyFrame}</style>
      <div className="theThink" style={{ position: "relative" }}>
        <img
          style={{
            position: "absolute",
            left: "25%",
            animation: ` randomItem${Date.now()} 0.5s`,
          }}
          width={100}
          height={100}
          src={computerRandom.hinhAnh}
          alt={computerRandom.hinhAnh}
        />
      </div>
      <div className="speech-bubble "></div>
      <img
        width={200}
        height={200}
        src="../img/playerComputer.png"
        alt="../img/playerComputer.png"
      />
    </div>
  );
}
