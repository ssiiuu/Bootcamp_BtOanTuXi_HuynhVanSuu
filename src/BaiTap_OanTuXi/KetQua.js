import React from "react";

export default function (props) {
  let { ketQua, soLuotChoi, soLuotThang } = props;
  return (
    <div>
      <div className="display-4 text-warning"> {ketQua} </div>
      <div className="display-4 text-success">
        Số lượt thắng: <span className="text-warning">{soLuotThang}</span>
      </div>
      <div className="display-4 text-success">
        Tổng lượt chơi: <span className="text-warning">{soLuotChoi}</span>
      </div>
    </div>
  );
}
