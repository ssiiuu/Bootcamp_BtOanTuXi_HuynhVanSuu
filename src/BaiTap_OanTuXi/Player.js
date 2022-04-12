import React, { useState } from "react";

export default function Player(props) {
  let { mangDatCuoc, datCuoc } = props;
  // console.log("mangDatCuoc", mangDatCuoc);
  return (
    <div className="playerGame">
      <div className="theThink">
        <img
          width={100}
          height={100}
          src={mangDatCuoc.find((item) => item.isDatCuoc === true).hinhAnh}
          alt="hinh anh keo_bua_bao"
        />
      </div>
      <div className="speech-bubble "></div>
      <img
        width={200}
        height={200}
        src="../img/player.png"
        alt="../img/player.png"
      />

      <div className="row">
        {mangDatCuoc.map((item, index) => {
          let border = {};
          if (item.isDatCuoc) {
            border = { border: "5px solid orange" };
          }
          return (
            <div className="col-4" key={index}>
              <button
                style={border}
                onClick={() => {
                  datCuoc(item.ma);
                }}
                className="btnPlayer"
              >
                <img src={item.hinhAnh} alt={item.hinhAnh} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
